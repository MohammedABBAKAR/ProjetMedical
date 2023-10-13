// import express from "express";
// import dbConnection from "../services/dbConnection.js";


// import argon2 from 'argon2';
// import { getAllHours, getNotAvailableHours } from "../services/api.js";


// const praticienRouter = express.Router();


// praticienRouter.get("/", async (req, res) => {
//   const query = `
    
//     SELECT praticien.*, GROUP_CONCAT(specialty.name) AS specialities
//     FROM  medic.praticien
//     JOIN medic.specialty
//     JOIN medic.specialty_praticien
//     ON specialty_praticien.specialty_id = specialty.id
//     AND specialty_praticien.praticien_id = praticien.id
//     GROUP BY praticien.id;
//  `;

//   try {
//     const [results] = await dbConnection.execute(query);
//     // console.log(results);
//     return res.status(200).json({
//       status: 200,
//       message: "ok",
//       data: results,
//     });
//   } catch (error) {
//     return res.status(400).json({
//       status: 400,
//       message: "Error",
//     });
//   }

//   // return res.send("endpoint praticien'");
// });

// praticienRouter.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   // console.log(req.params);
//   const query = `
//         SELECT praticien.*
//         FROM medic.praticien
//         WHERE praticien.id = :id
//         `;

//   try {
//     // const [results] = await dbConnection.execute(query,{id:1});
//     const [results] = await dbConnection.execute(query, req.params);
//     // console.log(results);
//     return res.status(200).json({
//       status: 200,
//       message: "ok",

//       data: results.shift(),
//     });
//   } catch (error) {}
//   res.send(`praticien ${id}`);
// });








// praticienRouter.post('/register',async(req,res)=>{

 

//   const bodyHashed = { ...req.body , password: await argon2.hash(req.body.password)}
//   console.log(bodyHashed)


// const query = `
// INSERT INTO medic.praticien
// VALUE (NULL, :firstname, :lastname, :addersse, :email, :password, :image);
// `;
// try {
//   const [results] = await dbConnection.execute(query, bodyHashed);
//   res.status(201).json({
//     status:201,
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
    
    






//     praticienRouter.post('/login', async (req,res)=>{

    
//       const query = `
//         SELECT praticien.*
//         FROM medic.praticien
//         WHERE praticien.email = :email;
      
//       `;
//       let results;
    
    
//     try{
    
//      [results] = await dbConnection.execute(query, req.body);
//     console.log(results)
    
//     if (results.length ===0){
//     return res.status(403).json({
//       status:403,
//       message: "Forbidden",
//     })
    
    
//     }
    
    
//     } catch(error){
//     return res.status(400).json({
//       status:400,
//       message: "Error",
//     })
    
//     }
    
    
//     const praticien  = results.shift();
    
//     if(!await argon2.verify(praticien.password, req.body.password)){
    
//       return res.status(403).json({
//         status:403,
//         message: "Forbidden",
//       })
    
    
//     }
    

//     return res.status(200).json({
//     status:200,
//     message: 'ok',
//     data: praticien
    
    
//     });
//     });





//     praticienRouter.get('/:id/:date/hours',async (req,res)=>{
//       // console.log(req.params.date);
//       const allHours = await getAllHours();
//       const notAvailableHours = await getNotAvailableHours(req.params.date, req.params.id);
//       const listHoraires = notAvailableHours.shift().list_horaires.split(',');
    
//       const merge = allHours.map( (value, index) => {
//         if(listHoraires.indexOf(''+value.id) === -1) {
//           return {...value, available: true};
//         } else {
//           return {...value, available: false};
//         }
//       });

//       return res.status(200).json({
//         data: merge,
//       })

//     });

    

// export default praticienRouter;

import express from "express";
import dbConnection from "../services/dbConnection.js";

import argon2 from "argon2";
import { getAllHours, getNotAvailableHours } from "../services/api.js";

const praticienRouter = express.Router();

praticienRouter.get("/", async (req, res) => {
	const query = `
    
    SELECT praticien.*, GROUP_CONCAT(specialty.name) AS specialities
    FROM  medic.praticien
    JOIN medic.specialty
    JOIN medic.specialty_praticien
    ON specialty_praticien.specialty_id = specialty.id
    AND specialty_praticien.praticien_id = praticien.id
    GROUP BY praticien.id;
 `;

	try {
		const [results] = await dbConnection.execute(query);

		for (let i = 0; i < results.length; i++) {
			const allHours = await getAllHours();
			const notAvailableHours = await getNotAvailableHours(
				new Date().toLocaleDateString("en-CA"),
				// "2023-12-01",
				results[i].id,
			);

			if (notAvailableHours.length !== 0) {
				const listHoraires = notAvailableHours.shift().list_horaires.split(",");

				const merge = allHours.map((value, index) => {
					if (listHoraires.indexOf("" + value.id) === -1) {
						return { ...value, available: true };
					} else {
						return { ...value, available: false };
					}
				});

				results[i]["hours"] = merge;
			} else {
				results[i]["hours"] = allHours.map((value) => {
					return { ...value, available: true };
				});
			}
		}

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

praticienRouter.get("/:id", async (req, res) => {
	const { id } = req.params;
	// console.log(req.params);
	const query = `
        SELECT praticien.*
        FROM medic.praticien
        WHERE praticien.id = :id
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

praticienRouter.post("/register", async (req, res) => {
	const bodyHashed = {
		...req.body,
		password: await argon2.hash(req.body.password),
	};
	console.log(bodyHashed);

	const query = `
INSERT INTO medic.praticien
VALUE (NULL, :firstname, :lastname, :addersse, :email, :password, :image);
`;
	try {
		const [results] = await dbConnection.execute(query, bodyHashed);
		res.status(201).json({
			status: 201,
			message: "User created",
		});
	} catch (error) {
		return res.status(400).json({
			status: 400,
			message: "Error",
		});
	}
});

praticienRouter.post("/login", async (req, res) => {
	const query = `
        SELECT praticien.*
        FROM medic.praticien
        WHERE praticien.email = :email;
      
      `;
	let results;

	try {
		[results] = await dbConnection.execute(query, req.body);
		console.log(results);

		if (results.length === 0) {
			return res.status(403).json({
				status: 403,
				message: "Forbidden",
			});
		}
	} catch (error) {
		return res.status(400).json({
			status: 400,
			message: "Error",
		});
	}

	const praticien = results.shift();

	if (!(await argon2.verify(praticien.password, req.body.password))) {
		return res.status(403).json({
			status: 403,
			message: "Forbidden",
		});
	}

	return res.status(200).json({
		status: 200,
		message: "ok",
		data: praticien,
	});
});

praticienRouter.get("/:id/:date/hours", async (req, res) => {
	// console.log(req.params.date);
	const allHours = await getAllHours();
	const notAvailableHours = await getNotAvailableHours(
		req.params.date,
		req.params.id,
	);
	const listHoraires = notAvailableHours.shift().list_horaires.split(",");

	const merge = allHours.map((value, index) => {
		if (listHoraires.indexOf("" + value.id) === -1) {
			return { ...value, available: true };
		} else {
			return { ...value, available: false };
		}
	});

	return res.status(200).json({
		data: merge,
	});
});

export default praticienRouter;
