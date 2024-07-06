// let fs = require('fs')
// let express = require('express')
// let app = express()
// let path = require('path')


// we are using three methods to send data to the user
// in 1st method we used readfile function from file system
// in 2nd method we use json data inside res.end in /api endpoint.
// in 3rd method we use express.ststic function to send file to client


//1st
// app.get('/', (req, res) =>{
//     res.send('hello')
// })

//2nd
// app.get('/api', (req, res) =>{
//     res.send({
//         name: 'adarsh',
//         class: null
//     })
// })

//3rd


// app.listen(8000, () =>{
//     console.log('running');
//     // console.log(staticPath);
// 👍👍
// })

// above example is for routing in express and sending html page to client and json data with three methods



// template or view engines in node js 🖥️🛜

let fs = require('fs')
let express = require('express')
let app = express()
let path = require('path')


let staticPath = path.join(__dirname, '../public')
app.use(express.static(staticPath))

// using view engine handlebars.js or hbs
app.set('view engine', 'hbs')
// when we change name of "views" directory we need to write one extera line of code. 
//app.set("views", path.join(__dirname, '../tem'))

app.get('/', (req, res) =>{
    res.render('index', {
        hello: 'adarsh'
    })
})


app.get('/', (req, res) =>{
    res.send('hello')
})

app.listen(8000, () =>{
    console.log('running');
    // console.log(staticPath);
 

})