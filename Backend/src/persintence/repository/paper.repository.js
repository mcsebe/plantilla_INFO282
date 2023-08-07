import { Paper } from "../models/Paper.js";

export async function createPaper_(paper){
    const { name, date, description, userId } = paper
    try {
        const newPaper = await Paper.create({
            userId,
            name,
            date,
            description,
          });
          return newPaper
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function getPapers_(){
    try {
        const papers = await Paper.findAll({
            attributes: ["id", "name", "date", "description", "userId"],
            order: [["id", "DESC"]],
        });
        return papers
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function updatePaper_(paper){
    const { id, name, date, description } = paper
    try {
         
        const paper_update = await Paper.findByPk(id);
        paper_update.name = name;
        paper_update.date = date;
        paper_update.description = description;
        await paper.save();
        return "se modifico correctamente" 
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}


export async function deletePaper_(id){
    try {
        await Paper.destroy({
            where: { id },
        }); 
        return "se elimino correctamente"
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function getPaper_(id){
    try {
        const paper = await Paper.findOne({
            where: { id },
            attributes: ["id", "name", "date", "description", "userId"],
        });
        return paper
        
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}