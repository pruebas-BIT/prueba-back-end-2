import Employer from "../models/Employer.js";

export async function getEmployers() {
  try {
    const employer = await Employer.find().populate("departamentCode", "code");
    return employer;
  } catch (error) {
    throw new Error("error al obtener todos los empleados");
  }
}

export async function addEmployer(data) {
  const { code, name, lastname1, lastname2, departamentCode } = data;
  try {
    const employer = await Employer.findOne({ code: code });
    if (employer) {
      return `Ya Existe un usuario con el codigo:${code}`;
    } else {
      const employerB = await Employer.create({
        code: code,
        name: name,
        lastname1: lastname1,
        lastname2: lastname2,
        departamentCode: departamentCode,
      });
      return employerB;
    }
  } catch (error) {
    throw new Error(
      `Error al generar la creación del usuario con codigo: ${code} ${error.message}`
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
    throw new Error(
      `No se pudo actualizar el empleado con Codigo: ${code}`
    );
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
