/* globals Promise */

import mongoose from 'mongoose'
import express from 'express'
import bodyParser from 'body-parser'
import { MONGO_URL, PORT } from './config'

// mongoose
mongoose.Promise = Promise
const connect = () => (
  mongoose.connect(MONGO_URL, (err) => {
    if (err != null) {
      setTimeout(connect, 5000)
    }
  })
)
connect()

// setup express instance
const app = express()
const port = PORT

app.use(bodyParser.json())
app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.listen(port)
