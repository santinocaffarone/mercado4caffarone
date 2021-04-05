const express = require('express')
const app = express()
//const port = 3000
const puerto = process.env.PORT
const path = require('path');
app.use(express.static('public'));


app.listen(puerto || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/register/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

app.get('/login/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});


// Paleta de colores 
/*Amarillo: #EAC926;
Azul: #03264C;
Celeste: #1259c3;
Gris oscuro: #666;
Gris claro: #ebebeb;
Verde: #39b54a;*/