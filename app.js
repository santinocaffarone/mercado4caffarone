const express = require('express')
const app = express()
const port = 3000
const path = require('path');
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.listen(port, () => {
    console.log('Example app listening on port '+ port);
});


// Paleta de colores 
/*Amarillo: #EAC926;
Azul: #03264C;
Celeste: #1259c3;
Gris oscuro: #666;
Gris claro: #ebebeb;
Verde: #39b54a;*/