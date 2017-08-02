'use strict'

const express = require('express')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const webpackMiddleware = require('webpack-dev-middleware')

const app = express()

// Set up the webpack dev server
app.use(webpackMiddleware(
	webpack(webpackConfig),
	{ publicPath: '/public' }
))

// Set up static files
app.use(express.static('public'))