const controller = {};

// GET
controller.getAlumno = async (req, res) => {
  let item = {
    "nombre": "Javier",
    "apellido": "Monterroso"
  }
  res.json(item);
};

// POST
controller.addAlumno = async (req,res) => 
{
  // Obtener los datos del registro
  const { nombre, apellido} = req.body;
  console.log("El nuevo usuario será " + nombre + " " + apellido);
  let item = {
    "mensaje": "Añadido"
  }
  res.json(item);
}

module.exports = controller;