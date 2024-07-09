let express = require('express')
let axios = require('axios')
let path = require('path')
let app = express()
let port = 3000
let staticPath = path.join(__dirname, '../public')


app.use(express.static(staticPath))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '../views'))


app.get('/', (req, res) =>{
    res.render('index')
})


app.listen(port, () =>{
    console.log(`listening to ${port}`);
})