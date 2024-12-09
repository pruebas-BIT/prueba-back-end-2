import Departament from "../models/Deprtament.js";

export async function getDepartaments() {
  try {
    const departaments = await Departament.find();
    return departaments;
  } catch (error) {
    throw new Error("error al traer todos los departamentos.");
  }
}

export async function createNewDepartament({ departamentCode, name }) { //antes de departament code poner _id
  try {
    const verifyDepartament = await Departament.findOne({ name });
    if (verifyDepartament) {
      throw new Error(`The specified username is not available.`);
    }

    const newDepartament = await Departament.create({ departamentCode, name
      // _id:departamentCode,
      // departamentCode:departamentCode,
      // name:name
     });

    return newDepartament;
  } catch (error) {
    console.error(error);
    throw new Error(`Error creating the user: ${error.message}`);
  }
}

export async function updateDepartament(departamentToUpdate, updateData) {
  const { departamentCode, name } = updateData;

  if (name) {
    departamentToUpdate.name = name;
  }

  if (departamentCode) {
    departamentToUpdate.departamentCode = departamentCode;
  }

  await departamentToUpdate.save();
  return departamentToUpdate;
}

export async function deleteDepartament(departamentCode) {
  try {
    const departamentoEliminado = await Departament.findOneAndDelete({
      departamentCode,
    });
    if (!departamentoEliminado) {
      throw new Error("Departamento no encontrado");
    }
    return departamentoEliminado;
  } catch (error) {
    throw new Error(error.message);
  }
}
