let express = require('express')
let app = express()
let axios = require('axios')
let path = require('path')
let url = require('url')
let hbs = require('hbs')
let port = 3000
let staticPath = path.join(__dirname, '')

app.use(express.static(staticPath))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, ''))


app.get('/', (req, res) =>{
    res.render('index')
})

app.get(`/about`, async (req, res) =>{
    let data;
   try {
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=15facce67a51ac42cf416ee97a10bfc2`)

     data = await response.data
     console.log(`city name is ${data.name} and tem is ${(data.main.temp - 273).toFixed(2)} &deg;C`);

   } catch (error) {
    console.log(error);
   }

   res.render('about', {city: data.name})

 })

app.listen(port, () =>{
    console.log(`listening to ${port}`);
})