import { Paper } from "../persintence/models/Paper.js";


export async function createPaper(req, res) {
  try {
    const { name, date, description, userId } = req.body;
    const newPaper = await Paper.create({
      userId,
      name,
      date,
      description,
    });
    res.json(newPaper);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getPapers(req, res) {
  try {
    const papers = await Paper.findAll({
      attributes: ["id", "name", "date", "description", "userId"],
      order: [["id", "DESC"]],
    });
    res.json(papers);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function updatePaper(req, res) {
  try {
    const { id } = req.params;
    const { name, date, description } = req.body;

    const paper = await Paper.findByPk(id);
    paper.name = name;
    paper.date = date;
    paper.description = description;
    await paper.save();

    res.json(paper);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function deletePaper(req, res) {
  const { id } = req.params;
  try {
    await Paper.destroy({
      where: { id },
    });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getPaper(req, res) {
  const { id } = req.params;
  try {
    const paper = await Paper.findOne({
      where: { id },
      attributes: ["id", "name", "date", "description", "userId"],
    });
    res.json(paper);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
