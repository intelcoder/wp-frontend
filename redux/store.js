import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import staticReducers from './reducers'
import rootSaga, { createSagaInjector }from './sagas'
const sagaMiddleware = createSagaMiddleware()


export default function configureStore(initialState) {
  const store = createStore(
    createReducer(),
    initialState,
    applyMiddleware(sagaMiddleware)
  )
  sagaMiddleware.run(rootSaga)
  // Add a dictionary to keep track of the registered async reducers
  store.asyncReducers = {}

  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer
  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer
    store.replaceReducer(createReducer(store.asyncReducers))
  }
  store.injectSaga = createSagaInjector(sagaMiddleware.run, rootSaga)
  // Return the modified store
  return store
}

function createReducer(asyncReducers) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers
  })
}