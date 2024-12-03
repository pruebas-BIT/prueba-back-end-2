import { Schema, model } from "mongoose";

const departamentSchema = Schema({
  departamentCode: {
    type: Number,
    required: true,
  },
  name:{
    type:String,
    required:true,
  }
});

// Define el modelo usando el esquema correcto
const Departament = model("Departament", departamentSchema);

export default Departament;
