const express = require('express');
const path = require('node:path')
const app = express();


// ingresa al menu principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'menu.html'));
});

// Ruta para el algoritmo de cuadrados medios
app.get('/cuadrados_medios', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'cuadrados_medios.html'));
});

// Ruta para el algoritmo de productos medios
app.get('/productos_medios', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'productos_medios.html'));
});

// Ruta para el algoritmo multiplicativo constante
app.get('/multiplicativo_constante', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'multiplicativo_constante.html'));
});

// Ruta para el algoritmo lineal
app.get('/lineal', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'lineal.html'));
});

// Ruta para el algoritmo congruencial multiplicativo
app.get('/congruencial_multiplicativo', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'congruencial_multiplicativo.html'));
});

// Ruta para el algoritmo congruencial aditivo
app.get('/congruencial_aditivo', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'congruencial_aditivo.html'));
});

// Ruta para el algoritmo congruencial no lineal
app.get('/congruencial_no_lineal', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'congruencial_no_lineal.html'));
});


module.exports = app;