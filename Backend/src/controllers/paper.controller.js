import { Paper } from "../persintence/models/Paper.js";
import { createPaper_, getPapers_, updatePaper_, deletePaper_,getPaper_} from "../persintence/repository/paper.repository.js";

export async function createPaper(req, res) {
  const { name, date, description, userId } = req.body;
  const paper = { 
    name,
    date, 
    description,
    userId
  }
  createPaper_(paper).then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
  
}

export async function getPapers(req, res) {
  getPapers_().then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
}

export async function updatePaper(req, res) {
 
    const { id } = req.params;
    const { name, date, description ,  userId } = req.body;
    const paper = { 
      id,
      name,
      date, 
      description,
      userId
    }
    updatePaper_(paper).then(msg=> {
      res.status(200).json({status : true, msg : msg})
    }, error => {
      res.status(400).json({status : false, error : error.message })
    })
    
    
};

export async function deletePaper(req, res) {
  const { id } = req.params;
  deletePaper_(id).then(msg=> {
    res.status(200).json({status : true, msg : msg})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
  
};


export async function getPaper(req, res) {
  const { id } = req.params;
  getPaper_(id).then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
}
