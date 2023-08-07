import { User } from "../models/User.js"
import { Paper } from "../models/Paper.js";


export async function getUsers_(){
    try {
        const users = await User.findAll({
          atributes: ["id", "rut", "name", "mail"],
        });



        return users
      } catch (error) {
        
        throw new Error("Sucedio un error......")
        
      }
}

export async function createUser_(user){
    const { name, rut, mail } = user;
    try{ 
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
      return newUser
    } catch (error) {
        throw new Error("Sucedio un error......")
    }
    

}


export async function getUser_(id){
    try {
        const user = await User.findOne({
          where: {
            id,
          },
        });
        return user
      } catch (error) {
        throw new Error("Sucedio un error......")
      }
}

export async function updateUser_(user){
    const {id, name, rut, mail} = user 
    try {
        const user = await User.findByPk(id);
        user.name = name;
        user.rut = rut;
        user.mail = mail;
        await user.save();
        return "Usuario Modificado"
    } catch (error) {
        throw new Error("Sucedio un error......")
    }
}

export async function deleteUser_(id){
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
        return "Se elimino el usuario correctamente.. "
    } catch (error) {
        throw new Error("Sucedio un error......")
    }
}


export async function getUserPapers_(id){
    try {
        const tasks = await Paper.findAll({
            attributes: ["id", "name", "date", "description", "userId"],
            where: { userId: id },
          });
          return tasks;
    } catch (error) {
        throw new Error("Sucedio un error......")
    }
}