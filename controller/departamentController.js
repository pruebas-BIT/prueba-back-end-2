import { getDepartaments } from "../services/departamentService.js";

export async function listDepartament(req, res) {
  try {
    const departament = await getDepartaments();
    res.status(200).json(departament);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
