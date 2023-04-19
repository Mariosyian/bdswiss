import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import express from 'express'
import User from './mongo/models/User.js'

import { connectToMongoDb } from './mongo/mongo.js'

dotenv.config()

const PORT = process.env.BE_PORT || 3001

const app = express()
// app.use("/static", express.static(__dirname + "/views/"));
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/register', (req, res) => {
  const fullName = req.params.fullName
  const email = req.params.email
  const password = req.params.password

  const user = User.createUser(fullName, email, password)
  if (user) {
    res.send('User was created successfully. You may now login!')
  } else {
    res.send('Error while saving user, please try again later ...')
  }
})

app.post('/login', (req, res) => {
  const email = req.params.email
  const password = req.params.password
  const user = User.getUser(email, password)

  if (user == null) {
    res.send({ user, error: 'No matching user was found ...'})
  } else {
    res.send({ user, error: null })
  }
})

app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}!`)
  connectToMongoDb()
})
