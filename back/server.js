import express from "express";
import http from "node:http";
import dbConnection from "./services/dbConnection.js";
import patienRouter from "./routes/patienRouter.js";
import praticienRouter from "./routes/praticienRouter.js";
import rdvRouter from "./routes/rdvRouter.js";
import horaireRouter from "./routes/horaireRouter.js";

import specialty_praticienRouter from "./routes/specialty_praticienRouter.js"
import cors from 'cors';


import { error } from "node:console";
import specialtyRouter from "./routes/specialtyRouter.js";
import infoPraticientRouter from "./routes/infoPraticientRouter.js";
const app = express();

const router = express.Router();


app.use(router);


router.use(express.json());


// router.use(cors({
//   origin:'http://localhost:5173',
//  }));

router.use(cors());

// router.use(cors());

http://localhost:1000/

// router.use(cors({
//   origin:'http://localhost:1000/praticien',
// }));





router.use("/patient",patienRouter);
router.use("/praticien",praticienRouter);
router.use("/rdv",rdvRouter);
router.use("/horaire",horaireRouter);
router.use("/specialty_praticien",specialty_praticienRouter);
router.use("/specialty",specialtyRouter);
router.use("/info",infoPraticientRouter);
// router.get("/", (req, res) => res.send("coucou mohammed"));













router.get('/', async (req,res )=> {

 
  const query = `
  
  SELECT specialty.*
  FROM  medic.specialty;
  
  `;
  
 
  try {
  

  const [results] = await dbConnection.execute(query);
  // console.log(results);
  

  return res.status(200).json({
    status:200,
    message:"ok",
    data:results,
  })
  
  } catch (error){
  
  
    return  res.status(400).json({
      status: 400,
      message: "Error",
    })
  }

    // return res.send("endpoint students");
  });
  











router.get('/:id', async(req, res)=>{

   
    const {id} = req.params;
  
    const query =`
    SELECT specialty.*
    FROM medic.specialty
    WHERE specialty.id = :id
    `;
    
    try {
    // const [results] = await dbConnection.execute(query,{id:1});
    const [results] = await dbConnection.execute(query,req.params);
    console.log(results);
    return res.status(200).json({
      status:200,
      message:"ok",
      data:results.shift(),
    })
    }catch(error){
    
      
    }
      res.send(`specialty ${id}`);
    
    
    
    });





const server = http.createServer(app);

export default server;