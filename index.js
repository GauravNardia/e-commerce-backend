require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('top g here!')
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})