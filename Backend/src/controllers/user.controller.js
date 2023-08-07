import { User } from "../persintence/models/User.js";
import { Paper } from "../persintence/models/Paper.js";




export async function getUsers(req, res) {
  try {
    const users = await User.findAll({
      atributes: ["id", "rut", "name", "mail"],
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createUser(req, res) {
  const { name, rut, mail } = req.body;
  try {
    // new Date(deliveryDate).getTime()
    let newUser = await User.create(
      {
        name,
        rut,
        mail,
      },
      {
        fields: ["name", "rut", "mail"],
      }
    );
    return res.json(newUser);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}

export async function getUser(req, res) {
  const { id } = req.params;
  try {
    const user = await User.findOne({
      where: {
        id,
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, rut, mail } = req.body;

    const user = await User.findByPk(id);
    user.name = name;
    user.rut = rut;
    user.mail = mail;
    await user.save();

    res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function deleteUser(req, res) {
  const { id } = req.params;
  try {
    await Paper.destroy({
      where: {
        userId: id,
      },
    });
    await User.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getUserPapers(req, res) {
  const { id } = req.params;
  try {
    const tasks = await Paper.findAll({
      attributes: ["id", "name", "date", "description", "userId"],
      where: { userId: id },
    });
    res.json(tasks);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
