import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import express from 'express'
import User from './mongo/models/User.js'

import { connectToMongoDb } from './mongo/mongo.js'

dotenv.config()

const PORT = process.env.BE_PORT || 3001

const app = express()
app.use(bodyParser.json())

app.post('/register', (req, res) => {
  console.log(req.body)
  const fullName = req.body.fullName
  const email = req.body.email
  const password = req.body.password

  const user = User.getUser(email, password)
  if (user != null) {
    res.status(400).send('User already exists!')
  }

  const newUser = User.createUser(fullName, email, password)
  if (newUser) {
    res.send('User was created successfully. You may now login!')
  } else {
    res.send('Error while saving user, please try again later ...')
  }
})

app.post('/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password

  const user = User.getUser(email, password)
  if (user == null) {
    res.send({ user: user, error: 'No matching user was found ...'})
  } else {
    res.send({ user: user, error: null })
  }
})

app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}!`)
  connectToMongoDb()
})
