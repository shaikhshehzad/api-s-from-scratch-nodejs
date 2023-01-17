require("dotenv").config();
const express = require('express')
const app = express()
const PORT = process.env.PORT || 7000;

app.get('/', (req, res) => {
  res.send('Wupphuuu server is live now !')
})

app.get('/about', (req, res) => {
    res.send('From about')
  })
app.get('/contactus', (req, res) => {
    res.send('From contactus')
})

app.listen(PORT, () => {
  console.log(`Server app listening on port ${PORT}`)
})