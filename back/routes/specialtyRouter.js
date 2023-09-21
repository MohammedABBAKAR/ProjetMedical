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


export default specialtyRouter;