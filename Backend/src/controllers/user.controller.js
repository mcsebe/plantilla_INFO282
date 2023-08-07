import { User } from "../persintence/models/User.js";
import { Paper } from "../persintence/models/Paper.js";

import { getUsers_, createUser_, getUser_, updateUser_, deleteUser_, getUserPapers_} from "../persintence/repository/user.repository.js";


export function getUsers(req, res) {
  getUsers_().then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  }) 
}

export  function createUser(req, res) {
  const { name, rut, mail } = req.body;
  const user ={
    name, 
    rut,
    mail
  }
  createUser_(user).then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
    
}

export async function getUser(req, res) {
  const { id } = req.params;
  getUser_(id).then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
  
}

export const updateUser = async (req, res) => {

  const { id } = req.params;
  const { name, rut, mail } = req.body;
  const user ={
    id, 
    name, 
    rut,
    mail
  }
  updateUser_(user).then(msg => {
    res.status(200).json({status : true, msg : msg })
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
  
};

export async function deleteUser(req, res) {
  const { id } = req.params;
  deleteUser_(id).then(msg => {
    res.status(204).json({status : true, msg : msg })
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
    
  
}

export async function getUserPapers(req, res) {
  const { id } = req.params;
  getUserPapers_(id).then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
}
