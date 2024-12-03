import { Schema, model } from "mongoose";

const departamentSchema = Schema({
  departamentCode: {
    type: String,
    required: true,
  },
});

export default departamentSchema;
