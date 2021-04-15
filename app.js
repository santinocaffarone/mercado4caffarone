const express = require('express')
const app = express()
//const port = 3000
const puerto = process.env.PORT
const path = require('path');

app.use(express.static('public'));
app.set('view engine', 'ejs'); //hay que instalarlos con "npm i ejs"
app.listen(puerto || 3000, function() {
    console.log("Servidor corriendo en el puerto ");
});


app.get('/', (req, res) => {
    res.render('home');
});

app.get('/register/', (req, res) => {
    res.render('register');
});

app.get('/login/', (req, res) => {
    res.render('login');
});


