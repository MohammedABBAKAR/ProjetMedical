import express from "express";
import dbConnection from "../services/dbConnection.js";
const specialty_praticien= express.Router();


specialty_praticien.get("/", async (req, res) => {
    const query = `
      
      SELECT specialty_praticien.*
      FROM  medic.specialty_praticien;
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

  specialty_praticien.get("/:id", async (req, res) => {
    const { id } = req.params;
    const query = `
          SELECT specialty_praticien.*
          FROM medic.specialty_praticien
          WHERE specialty_praticien.id = :id
          `;
  
    try {
      const [results] = await dbConnection.execute(query, req.params);
      // console.log(results);
      return res.status(200).json({
        status: 200,
        message: "ok",
        data: results.shift(),
      });
    } catch (error) {}
    res.send(`specialty_praticien ${id}`);
  });










  // specialty_praticien.post('/register', async(req,res)=>{

  //   //hacher le mot de passe contenu dans seq .body
  

  
  // // res.send("coucou user")
  
  // const query = `
  // INSERT INTO medic.specialty_praticien (specialty_id, praticien_id)
  // VALUES (1, @praticien_id);
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
      






























export default specialty_praticien;