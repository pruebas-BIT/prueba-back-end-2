import { getEmployers } from "../services/employerServices.js";

export async function listEmployer(req, res) {
  try {
    const employer = await getEmployers();
    res.status(200).json(employer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
