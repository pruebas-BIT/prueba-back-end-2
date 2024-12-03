import {
  getEmployers,
  getByCode,
  updateEmployer,
  addEmployer,
  deleteEmployer,
} from "../services/employerServices.js";

export async function listEmployer(req, res) {
  try {
    const employer = await getEmployers();
    res.status(200).json(employer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function createEmployer(req, res) {
  try {
    const data = req.body;
    const employer = await addEmployer(data);
    if (typeof employer === "string") {
      return res.status(404).json(employer);
    } else {
      return res.status(201).json({ message: "Empleado Creado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function updateOneEmployer(req, res) {
  try {
    const data = req.body;
    const employer = await getByCode(data.code);
    if (typeof employer === "string") {
      return res.status(404).json(employer);
    } else {
      const employerUpdate = await updateEmployer(employer, data);
      return res.status(200).json({
        message: "Empleado Actualizado Con exito",
        employer: employer,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function DeleteEmployer(req, res) {
  const { codigo } = req.params;
  try {
    const empleadoEliminado = await deleteEmployer(codigo);
    codigo;
    res.send({ message: "Empleado eliminado", empleado });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error eliminando el empleado", error: error.message });
  }
}
