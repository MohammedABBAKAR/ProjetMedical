import express from "express";
import dbConnection from "../services/dbConnection.js";
import argon2 from 'argon2';

const patienRouter = express.Router();









patienRouter.get("/", async (req, res) => {
    const query = `
      
      SELECT patient.*
      FROM  medic.patient;
   `;
  
    try {
      const [results] = await dbConnection.execute(query);
      // console.log(results);
       // Si la requête SQL s'exécute avec succès, renvoyer les données extraites.
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
      





      // patienRouter.delete("/delete", async (req, res) => {
      //   // récupérer les informations dans la base de données pour connaître id à supprimer
      //   const { id } = req.body;
      //   const patient = await getPatientById(id);
      
      //   // requête
      //   const query = `
      //     DELETE FROM medic.patient
      //     WHERE patient.id = :id;
      //   `;
      
      //   /*
      //     la valeur de la variable id de la requête SQL est définie dans un objet JS dont les propriétés reprennent les noms des variables SQL
      //       variable SQL :id > { id: ... }
      //       variable SQL :name et :id > { name: ..., id: ... }
      //   */
      
      //   try {
      //     const [results] = await dbConnection.execute(query, req.body);
      
      //     // supprimer ID
      //     await fs.rm(`${uploadDirectory}${patient.id}`);
      
      //     return res.status(200).json({
      //       status: 200,
      //       message: "OK",
      //     });
      //   } catch (error) {
      //     // renvoyer une erreur
      //     return res.status(400).json({
      //       status: 400,
      //       // message: "Error",
      //       message: error,
      //     });
      //   }
      // });


      patienRouter.delete("/delete", async (req, res) => {
        try {
          // Récupérez l'ID du patient à supprimer à partir des paramètres de la requête
          const { id } = req.body;
      
          // Supprimez le patient de la base de données en utilisant l'ID
          const deleteQuery = "DELETE FROM medic.patient WHERE id = ?";
          const [result] = await dbConnection.execute(deleteQuery, [id]);
      
          // Vérifiez si des lignes ont été supprimées
          if (result.affectedRows > 0) {
            // Supprimez également les données associées, comme les fichiers, s'il y en a
            await fs.rm(`${uploadDirectory}/${id}`);
      
            return res.status(200).json({
              status: 200,
              message: "Patient supprimé avec succès",
            });
          } else {
            return res.status(404).json({
              status: 404,
              message: "Patient non trouvé",
            });
          }
        } catch (error) {
          // Renvoyez une erreur en cas d'échec de la suppression
          return res.status(500).json({
            status: 500,
            message: "Erreur lors de la suppression du patient",
          });
        }
      });







     

      // patienRouter.put('/update/:id', async (req, res) => {
      //   const { id, email } = req.body;
      
      //   // Requête SQL pour mettre à jour l'e-mail du patient
      //   const query = `
      //     UPDATE medic.patient
      //     SET email = ?
      //     WHERE id = ?;
      //   `;
      
      //   try {
      //     const [results] = await dbConnection.execute(query, [email, id]); // Utilisez un tableau pour les paramètres
      
      //     return res.status(200).json({
      //       status: 200,
      //       message: 'Mise à jour réussie',
      //     });
      //   } catch (error) {
      //     return res.status(400).json({
      //       status: 400,
      //       message: 'Erreur lors de la mise à jour',
      //       error: error
      //     });
      //   }
      // });
      
      patienRouter.put('/update/:id', (req, res) => {
        const sql = "UPDATE medic.patient SET `email`=? WHERE id=?";
        const id = req.params.id;
        dbConnection.query(sql, [req.body.email, id], (err, result) => {
          if (err) return res.json("Error");
          return res.json({ updated: true });
        });
      });













export default patienRouter;
