const express = require('express');
const app = express();

const cars = require('./routes/cars');
const modules = require('./routes/modules');
const node = require('./routes/node');

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/cars', cars);
app.use('/modules', modules);
app.use('/node/', node);

const fs = require('fs');

//fs.readFileSync - Returns the contents of the path - så har returneres indholdet af HTML siderne - i String format
const home = fs.readFileSync(__dirname + '/public/home/home.html').toString();
const api_info = fs.readFileSync(__dirname + '/public/api/api.html').toString();

app.get('/', (req, res) => {
    return res.send(home);
});

app.get('/api', (req, res) => {
    return res.send(api_info);
});

const port  = process.env.PORT || 3000;

app.listen(port, (error) => {
    if (error) {
        console.log("Server couldn't start :( ", error);
    }
    console.log("Server started on port", Number(port));
});