// dependencies
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

// initializations
const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// global variables
app.use((req, res, next) => {
    next();
  })

// routes
app.use(require('./rutas'));

// public
app.use(express.static(path.join(__dirname, 'public')));

// start the server 
app.listen(app.get('port'), () => {
    console.log('Servidor en puerto:', app.get('port'));
})