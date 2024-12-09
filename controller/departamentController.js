import Departament from "../models/Deprtament.js";
import {
  getDepartaments,
  createNewDepartament,
  updateDepartament,
  deleteDepartament,
} from "../services/departamentService.js";

export async function listDepartament(req, res) {
  try {
    const departament = await getDepartaments();
    res.status(200).json(departament);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function createDepartament(req, res) {
  try {
    const { departamentCode, name } = req.body;

    const verifyDepartament = await Departament.findOne({ name });
    if (verifyDepartament) {
      return res
        .status(400)
        .json({ message: "Este departamento ya ha sido creado" });
    }

    const newDepartament = await Departament.create({ departamentCode, name }); //poner _id dentro de llaves

    return res.status(201).json(newDepartament);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: `Error al crear el Departamento: ${error.message}` });
  }
}

export async function editDepartament(req, res) {
  try {
    const { id } = req.params;

    const DepartamentToUpdate = await Departament.findById(id);

    if (!DepartamentToUpdate) {
      return res.status(404).json("Departamento no encontrado.");
    }

    await updateDepartament(DepartamentToUpdate, req.body);
    return res.json("Departamento actualizado correctamente.");
  } catch (err) {
    console.error(err);
    return res.status(500).json("Error al actualizar el Departamento.");
  }
}

export async function remove(req, res) {
  const { codigo } = req.params;
  try {
    const departamentoEliminado =
      await deleteDepartament(codigo);
    res.send({
      message: "Departamento eliminado",
      departamento: departamentoEliminado,
    });
  } catch (error) {
    res
      .status(500)
      .send({
        message: "Error eliminando el departamento",
        error: error.message,
      });
  }
}
