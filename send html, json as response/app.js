let fs = require('fs')
let express = require('express')

let file = fs.readFileSync('index.html', 'utf-8')
let app = express()

app.get('/', (req, res) =>{
    res.send(file)
})

app.get('/api', (req, res) =>{

})

// app.get('/', (req, res) =>{

// })

app.listen(8000, () =>{
    console.log('running');
})