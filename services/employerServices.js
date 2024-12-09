import Employer from "../models/Employer.js";
import Departament from "../models/Deprtament.js";

export async function getEmployers() {
  try {
    const employer = await Employer.find().populate("departamentCode");
    return employer;
  } catch (error) {
    throw new Error("error al obtener todos los empleados");
  }
}

export async function addEmployer(data) {
  const { code, name, lastname1, lastname2, departamentCode } = data;
  try {
    const existingEmployer = await Employer.findOne({ code });
    if (existingEmployer) {
      return `Ya existe un usuario con el código: ${code}`;
    }

    const departament = await Departament.findById(departamentCode);
    if (!departament) {
      return `No se encontró un departamento con el código proporcionado: ${departamentCode}`;
    }

    const newEmployer = new Employer({
      code,
      name,
      lastname1,
      lastname2,
      departamentCode: departament._id
    });

    const savedEmployer = await newEmployer.save();
    return savedEmployer;
  } catch (error) {
    throw new Error(
      `Error al generar la creación del usuario con código: ${code}. ${error.message}`
    );
  }
}
export async function getByCode(code) {
  try {
    const user = await Employer.findOne({ code: code });
    if (user) {
      return user;
    } else {
      return `No Existe un Empleado con el Codigo: ${code}`;
    }
  } catch (error) {
    throw new Error(`Se presente el siguente error: ${error.message}`);
  }
}

export async function updateEmployer(employer, data, code) {
  try {
    const { name, lastname1, lastname2, departamentCode } = data;
    employer.name = name || employer.name;
    employer.lastname1 = lastname1 || employer.lastname1;
    employer.lastname2 = lastname2 || employer.lastname2;
    employer.departamentCode = departamentCode || employer.departamentCode;

    await employer.save();
    return employer;
  } catch (error) {
    throw new Error(`No se pudo actualizar el empleado con Codigo: ${code}`);
  }
}
export async function deleteEmployer(code) {
  try {
    const empleadoEliminado = await Employer.findOneAndDelete({ code });
    if (!empleadoEliminado) {
      throw new Error("empleado no encontrado");
    }
    return empleadoEliminado;
  } catch (error) {
    throw new Error(error.message);
  }
}
