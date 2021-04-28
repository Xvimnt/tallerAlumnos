// dependencies
const express = require('express');
const router = express.Router();

// Endpoints de alumnos
const rutasAlumno = require("../controladores/alumnoCtl.js");
router.get('/getAlumno', rutasAlumno.getAlumno);
router.post('/addAlumno', rutasAlumno.addAlumno);

// exportarlo
module.exports = router;