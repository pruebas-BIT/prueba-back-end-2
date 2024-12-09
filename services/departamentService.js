// import Departament from "../models/Deprtament.js";

// export async function getDepartaments() {
//   try {
//     const departaments = await Departament.find();
//     return departaments;
//   } catch (error) {
//     throw new Error("Error al traer todos los departamentos.");
//   }
// }

// export async function createNewDepartament({ departamentCode, name }) {
//   try {
//     const verifyDepartament = await Departament.findOne({ name });
//     if (verifyDepartament) {
//       throw new Error(`The specified username is not available.`);
//     }

//     const newDepartament = new Departament({
//       _id: departamentCode,        // Asigna departamentCode al campo _id
//       departamentCode,             // Asigna departamentCode
//       name                         // Asigna name
//     });

//     await newDepartament.save();
//     return newDepartament;
//   } catch (error) {
//     console.error(error);
//     throw new Error(`Error creating the department: ${error.message}`);
//   }
// }

// export async function updateDepartament(departamentToUpdate, updateData) {
//   const { departamentCode, name } = updateData;

//   if (name) {
//     departamentToUpdate.name = name;
//   }

//   if (departamentCode) {
//     departamentToUpdate.departamentCode = departamentCode;
//   }

//   await departamentToUpdate.save();
//   return departamentToUpdate;
// }

// export async function deleteDepartament(departamentCode) {
//   try {
//     const departamentoEliminado = await Departament.findOneAndDelete({
//       departamentCode,
//     });
//     if (!departamentoEliminado) {
//       throw new Error("Departamento no encontrado");
//     }
//     return departamentoEliminado;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }

 import Departament from "../models/Deprtament.js";

export async function getDepartaments() {
  try {
    const departaments = await Departament.find();
    return departaments;
  } catch (error) {
    throw new Error("Error al traer todos los departamentos.");
  }
}

export async function createNewDepartament(data) {
  const { departamentCode, name } = data;
  try {
    const verifyDepartament = await Departament.findOne({ name });
    if (verifyDepartament) {
      throw new Error(`The specified department name is not available.`);
    }

    const newDepartament = new Departament({
      _id: departamentCode,
      departamentCode,
      name
    });

    await newDepartament.save();
    return newDepartament;
  } catch (error) {
    console.error(error);
    throw new Error(`Error creating the department: ${error.message}`);
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

