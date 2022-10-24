const express = require('express')
const app = express()
const token = require('./util/token')

app.get('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.get('/token', (req, res) => {
    ;(async () => {
    const buffer = await token();
    res.json(buffer);
  })()
})

app.listen(process.env.PORT || 3000)