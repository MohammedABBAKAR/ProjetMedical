import express from "express";
import dbConnection from "../services/dbConnection.js";
const patienRouter = express.Router();

patienRouter.get("/", async (req, res) => {
  const query = `
    
    SELECT patient.*
    FROM  medic.patient;
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
patienRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const query = `
        SELECT patien.*
        FROM medic.patien
        WHERE patien.id = :id
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
  res.send(`patien ${id}`);
});

export default patienRouter;
