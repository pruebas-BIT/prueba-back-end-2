import Employer from "../models/Employer.js";

export async function getEmployers() {
  try {
    const employer = await Employer.find();
    return employer;
  } catch (error) {
    throw new Error("error al obtener todos los empleados")
  }
}
