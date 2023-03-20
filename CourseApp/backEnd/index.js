const express = require('express')
const cors = require('cors')
const data = require("./data.json");
const app = express()
app.use(cors())
app.use(express.json())
const port = 5000;

app.get('/', (req, res) => {
    res.json(data);
})

app.listen(port, console.log('Listening... at port' + port))