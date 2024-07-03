const express  = require('express')
const port = 8000
let app = express()

app.get('/', (req, res) =>{
    res.status(200).send('welcome adarsh')
})

app.get('/about', (req, res) =>{
    res.send('welcome adarsh on about page')
})

app.listen(port, () =>{
    console.log('running on port');
})

