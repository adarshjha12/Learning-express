let fs = require('fs')
let express = require('express')

let file = fs.readFileSync('index.html', 'utf-8')
let app = express()

// we are using three methods to send data to the user
// in 1st method we used readfile function from file system
// in 2nd method we use json data inside res.end in /api endpoint.
// in 3rd method we use express.ststic function to send file to client

app.get('/', (req, res) =>{
    res.send(file)
})

app.get('/api', (req, res) =>{
    res.send({
        name: 'adarsh',
        class: null
    })
})

app.get('/new', (req, res) =>{
    res.send()
})

app.listen(8000, () =>{
    console.log('running');
    
})

// above example is for routing in express. sending html page to client and json data