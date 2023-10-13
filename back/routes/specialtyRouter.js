import express from "express";
import dbConnection from "../services/dbConnection.js";

const specialtyRouter = express.Router();


specialtyRouter.get("/", async (req, res) => {
    const query = `
      
      SELECT specialty.*
      FROM  medic.specialty;
   `;
  
    try {
      const [results] = await dbConnection.execute(query);
      return res.status(200).json({
        status: 200,
        message: "ok",
        data: results,
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        message: "Error",
      });
    }
  });

  specialtyRouter.get("/limit/:limit/:search", async (req, res) => {
    const { limit, search } = req.params;
    // console.log(search);
    const query = `
      SELECT specialty.*
      FROM medic.specialty
      WHERE specialty.name LIKE '%${search}%'
      LIMIT :limit;
   `;
  
    try {
      const [results] = await dbConnection.execute(query, req.params);
      return res.status(200).json({
        status: 200,
        message: "ok",
        data: results,
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        message: "Error",
      });
    }
  });



//   specialtyRouter.post('/', async(req,res)=>{

//   //hacher le mot de passe contenu dans seq .body

 

// // res.send("coucou user")

// const query = `
// INSERT INTO medic.specialty
// VALUE (NULL, :specialty_id);
// `;
// try {
//   // const [results] = await dbConnection.execute(query, bodyHashed);
//   const [results] = await dbConnection.execute(query, bodyHashed );
//   res.status(200).json({
//     status:200,
//     message: 'User created'
//   });
// } catch (error){

// return res.status(400).json(
//   {
//     status:400,
//     message: "Error",
//   }
// )

// }

//     });
    


export default specialtyRouter;