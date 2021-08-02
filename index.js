const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hi, My name is Suyash Kelvin Savant.\n this is me testing node.js App on AWS')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})