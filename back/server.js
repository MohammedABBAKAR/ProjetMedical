import express from "express";
import http from "node:http";

const app = express();

const router = express.Router();


app.use(router);


router.use(express.json());




router.get("/", (req, res) => res.send("coucou mohammed"));










const server = http.createServer(app);

export default server;