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

export default departamentSchema;
