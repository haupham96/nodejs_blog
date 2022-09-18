// import { engine } from "express-handlebars";
const express = require('express');
const morgan = require('morgan');
var methodOverride = require('method-override');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');
const path = require('path');

const router = require('./routes');
const db = require('./config/db');

//Connect to DB
db.connect();

//Config using put patch delete from Form
app.use(methodOverride('_method'));

//Http Logger
// app.use(morgan("combined"));

//use middle ware => stand between browser and controller
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// join __dirname with resources/public
// => get static files with localhost:3000/img/logo.png
app.use(express.static(path.join(__dirname, 'resources', 'public')));

//Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// console.log("Path :", path.join(__dirname, "resources/views"));

router(app);

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
    console.log(path.join(__dirname, 'resources\\public'));
});
