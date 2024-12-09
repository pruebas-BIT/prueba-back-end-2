import { Schema, model } from "mongoose";

const departamentSchema = new Schema({
  departamentCode: {
    type: Number,
    required: true,
    unique: true  // Asegúrate de que cada código de departamento sea único
  },
  name: {
    type: String,
    required: true,
    unique: true  // Asegúrate de que cada nombre de departamento sea único
  }
});

// Define el modelo usando el esquema correcto
const Departament = model("Departament", departamentSchema);

export default Departament;
