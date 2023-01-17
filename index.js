require("dotenv").config();
const express = require('express')
const app = express()
const PORT = process.env.PORT || 7000;
const path = require('path');
const publicPath = path.join(__dirname, 'public');

app.get('/', (req, res) => {
//   res.send('Wupphuuu server is live now !')

    res.sendFile(`${publicPath}/HomePage.html`);

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