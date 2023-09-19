import express from "express";
import dbConnection from "../services/dbConnection.js";
const horaireRouter = express.Router();



horaireRouter.get("/", async (req, res) => {
    const query = `
      
      SELECT horaire.*
      FROM  medic.horaire;
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




  horaireRouter.get("/:id", async (req, res) => {
    const { id } = req.params;
    // console.log(req.params);
    const query = `
          SELECT   horaire.*
          FROM medic.horaire
          WHERE   horaire.id = :id
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
    res.send(`horaire ${id}`);
  });








export default horaireRouter ;