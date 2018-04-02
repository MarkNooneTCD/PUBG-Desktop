const express = require('express')
const app = express()

let config_data = require('./Config/config_data');

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
