import Departament from "../models/Deprtament.js";


export async function getDepartaments() {
  try {
    const departaments = await Departament.find();
    return departaments;
  } catch (error) {
    throw new Error("error al traer todos los departamentos.");
  }
}
