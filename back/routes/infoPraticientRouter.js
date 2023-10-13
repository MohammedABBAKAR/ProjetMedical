import express from "express";
import dbConnection from "../services/dbConnection.js";
import argon2 from 'argon2';

const infoPraticientRouter = express.Router();









infoPraticientRouter.get("/", async (req, res) => {
    const query = `
      
    SELECT
    p.id AS praticien_id,
    p.firstname AS praticien_firstname,
    p.lastname AS praticien_lastname,
    p.addersse AS praticien_addersse,
    p.email AS praticien_email,
    sp.name AS specialty_name
FROM
    medic.praticien AS p
JOIN
    medic.specialty_praticien AS sp_p ON p.id = sp_p.praticien_id
JOIN
    medic.specialty AS sp ON sp_p.specialty_id = sp.id;

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
  









  infoPraticientRouter.get("/:id", async (req, res) => {
    const { id } = req.params;
    // console.log(req.params);
    const query = `
    SELECT
    p.id AS praticien_id,
    p.firstname AS praticien_firstname,
    p.lastname AS praticien_lastname,
    p.addersse AS praticien_addersse,
    p.email AS praticien_email,
    sp.name AS specialty_name
FROM
    medic.praticien AS p
JOIN
    medic.specialty_praticien AS sp_p ON p.id = sp_p.praticien_id
JOIN
    medic.specialty AS sp ON sp_p.specialty_id = sp.id;
         
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
    res.send(`praticien ${id}`);
  });
  







  infoPraticientRouter.post('/register', async(req,res)=>{

    //hacher le mot de passe contenu dans seq .body
  
    const bodyHashed = { ...req.body , password: await argon2.hash(req.body.password)}
    console.log(bodyHashed)
  
  // res.send("coucou user")
  
  const query = `
  INSERT INTO medic.praticien
VALUE (NULL, :firstname, :lastname, :addersse, :email, :password, :image);

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
      









      infoPraticientRouter.post('/login', async (req,res)=>{
      
        const query = `
          SELECT praticien.*
          FROM medic.praticien
          WHERE praticien.email = :email;
        
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
      
      const praticien = results.shift();
      // console.log(user);
      
      
      if(!await argon2.verify(praticien.password, req.body.password)){
      
        return res.status(403).json({
          status:403,
          message: "Forbidden",
        })
      
      
      }
      
      
      return res.status(200).json({
      status:200,
      message: 'ok',
      data: praticien
      
      
      });
      });














export default infoPraticientRouter;