import express from 'express'
import bodyParser from 'body-parser'

const PORT = process.env.BE_PORT | 3001

const app = express()
// app.use("/static", express.static(__dirname + "/views/"));
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/login', (req, res) => {
  // TBD
})

app.get('/register', (req, res) => {
  // TBD
})

app.post('/login', (req, res) => {
  // TBD
})

app.post('/logout', (req, res) => {
  // TBD
})

app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}`)
})
