import mongoose, { Schema, model } from "mongoose";

const employerSchema = Schema({
  //_id:String,
  code: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastname1: {
    type: String,
    required: true,
  },
  lastname2: {
    type: String,
    required: false,
  },
  departamentCode: {
    type: mongoose.Types.ObjectId,
    ref:'Departament',
    required: true,
  },
});
const Employer = mongoose.model("employer", employerSchema);

export default Employer;
