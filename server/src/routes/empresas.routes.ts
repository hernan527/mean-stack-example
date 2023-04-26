import * as express from "express";
import * as mongodb from "mongodb";
import { collections } from "../conection/database";

export const empresasRouter = express.Router();
empresasRouter.use(express.json());

empresasRouter.get("/", async (_req, res) => {
    try {
        const empresas = await collections.empresas.find({}).toArray();
        res.status(200).send(empresas);
    } catch (error) {
        res.status(500).send(error.message);
    }
});