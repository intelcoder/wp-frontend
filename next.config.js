const isProd = process.env.production === 'production'
const path = require('path')
// require('dotenv').config({
//   path: path.join(__dirname, `env/.env.${isProd ? 'prod' : 'dev'}`),
// })

const withPlugins = require('next-compose-plugins')
const withTypescript = require('@zeit/next-typescript')
// const Dotenv = require('dotenv-webpack')

module.exports = withPlugins([
  [withTypescript],
  // [
  //   new Dotenv({
  //     systemvars: true,
  //     path: path.join(__dirname, `env/.env.${isProd ? 'prod' : 'dev'}`),
  //   }),
  // ]
])
