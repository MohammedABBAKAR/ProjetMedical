import express from "express";
import dbConnection from "../services/dbConnection.js";
const rdvRouter = express.Router();

rdvRouter.get("/", async (req, res) => {
  const query = `
    
    SELECT rdv.*
    FROM  medic.rdv;
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

});

rdvRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  // console.log(req.params);
  const query = `
        SELECT rdv.*
        FROM medic.rdv
        WHERE rdv.id = :id
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
  res.send(`rdv ${id}`);
});

export default rdvRouter;
