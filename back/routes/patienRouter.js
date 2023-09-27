import express from "express";
import dbConnection from "../services/dbConnection.js";
import argon2 from 'argon2';
import cors from 'cors';
const patienRouter = express.Router();









patienRouter.get("/", async (req, res) => {
    const query = `
      
      SELECT patient.*
      FROM  medic.patient;
   `;
  
    try {
      const [results] = await dbConnection.execute(query);
      // console.log(results);
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
  
    // return res.send("endpoint praticien'");
  });
  
  patienRouter.get("/:id", async (req, res) => {
    const { id } = req.params;
    // console.log(req.params);
    const query = `
          SELECT patient.*
          FROM medic.patient
          WHERE patient.id = :id
          `;
  
    try {
      // const [results] = await dbConnection.execute(query,{id:1});
      const [results] = await dbConnection.execute(query, req.params);
      // console.log(results);
      return res.status(200).json({
        status: 200,
        message: "ok",
  
        data: results.shift(),
      });
    } catch (error) {}
    res.send(`patient ${id}`);
  });
  
  









patienRouter.post('/register', async(req,res)=>{

    //hacher le mot de passe contenu dans seq .body
  
    const bodyHashed = { ...req.body , password: await argon2.hash(req.body.password)}
    console.log(bodyHashed)
  
  // res.send("coucou user")
  
  const query = `
  INSERT INTO medic.patient
  VALUE (NULL, :firstname, :lastname, :birthday, :addersse, :email, :password);
  `;
  try {
    // const [results] = await dbConnection.execute(query, bodyHashed);
    const [results] = await dbConnection.execute(query, bodyHashed );
    res.status(200).json({
      status:200,
      message: 'User created'
    });
  } catch (error){
  
  return res.status(400).json(
    {
      status:400,
      message: "Error",
    }
  )
  
  }
  
      });
      













patienRouter.post('/login', async (req,res)=>{
      
        const query = `
          SELECT patient.*
          FROM medic.patient
          WHERE patient.email = :email;
        
        `;
        let results;
      
      try{
      
       [results] = await dbConnection.execute(query, req.body);
      console.log(results)
      
      if (results.length ===0){
      return res.status(403).json({
        status:403,
        message: "Forbidden",
      })
      
      
      }
      
      } catch(error){
      return res.status(400).json({
        status:400,
        message: "Error",
      })
      
      }
      
      const patient = results.shift();
      // console.log(user);
      
      
      if(!await argon2.verify(patient.password, req.body.password)){
      
        return res.status(403).json({
          status:403,
          message: "Forbidden",
        })
      
      
      }
      
      
      return res.status(200).json({
      status:200,
      message: 'ok',
      data: patient
      
      
      });
      });
      

export default patienRouter;
