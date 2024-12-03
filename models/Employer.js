import mongoose, { Schema, model } from "mongoose";

const employerSchema = Schema({
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

export default employerSchema;
