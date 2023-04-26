import * as express from "express";
import * as mongodb from "mongodb";
import { collections } from "../conection/database";

export const planesRouter = express.Router();
planesRouter.use(express.json());

planesRouter.get("/", async (_req, res) => {
    try {
        const planes = await collections.todoslosplanes.find({}).toArray();
        res.status(200).send(planes);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

planesRouter.get("/:id", async (req, res) => {
    try {
        const id = req?.params?.id;
        const query = { _id: (id) };
        const plan = await collections.todoslosplanes.findOne(query);

        if (plan) {
            res.status(200).send(plan);
        } else {
            res.status(404).send(`Failed to find a plan: ID ${id}`);
        }
    } catch (error) {
        res.status(404).send(`Failed to find a plan: ID ${req?.params?.id}`);
    }
});

planesRouter.post("/", async (req, res) => {
    try {
        const plan = req.body;
        const result = await collections.todoslosplanes.insertOne(plan);

        if (result.acknowledged) {
            res.status(201).send(`Created a new plan: ID ${result.insertedId}.`);
        } else {
            res.status(500).send("Failed to create a new plan.");
        }
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
});
planesRouter.put("/:id", async (req, res) => {
    try {
        const id = req?.params?.id;
        const plan = req.body;
        const query = { _id: (id) };
        const result = await collections.todoslosplanes.updateOne(query, { $set: plan });

        if (result && result.matchedCount) {
            res.status(200).send(`Updated a plan: ID ${id}.`);
        } else if (!result.matchedCount) {
            res.status(404).send(`Failed to find a plan: ID ${id}`);
        } else {
            res.status(304).send(`Failed to update a plan: ID ${id}`);
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});

planesRouter.delete("/:id", async (req, res) => {
    try {
        const id = req?.params?.id;
        const query = { _id: (id) };
        const result = await collections.todoslosplanes.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(`Removed a plan: ID ${id}`);
        } else if (!result) {
            res.status(400).send(`Failed to remove a plan: ID ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`Failed to find a plan: ID ${id}`);
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});


// import * as express from "express";
// import * as mongodb from "mongodb";
// import { collections } from "../conection/database";

// export const planesRouter = express.Router();
// planesRouter.use(express.json());

// planesRouter.get("/", async (_req, res) => {
//     try {
//         const planes = await collections.todoslosplanes.find({}).toArray();
//         res.status(200).send(planes);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// });

// planesRouter.get("/:id", async (req, res) => {
//     try {
//         const id = req?.params?.id;
//         const query = { _id: new mongodb.ObjectId(id) };
//         const plan = await collections.employees.findOne(query);

//         if (plan) {
//             res.status(200).send(plan);
//         } else {
//             res.status(404).send(`Failed to find un plan: ID ${id}`);
//         }
//     } catch (error) {
//         res.status(404).send(`Failed to find un plan: ID ${req?.params?.id}`);
//     }
// });

// planesRouter.post("/", async (req, res) => {
//     try {
//         const plan = req.body;
//         const result = await collections.todoslosplanes.insertOne(plan);

//         if (result.acknowledged) {
//             res.status(201).send(`Created a new plan: ID ${result.insertedId}.`);
//         } else {
//             res.status(500).send("Failed to create a new plan.");
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(400).send(error.message);
//     }
// });

// planesRouter.put("/:id", async (req, res) => {
//     try {
//         const id = req?.params?.id;
//         const plan = req.body;
//         const query = { _id: new mongodb.ObjectId(id) };
//         const result = await collections.todoslosplanes.updateOne(query, { $set: plan });

//         if (result && result.matchedCount) {
//             res.status(200).send(`Updated un plan: ID ${id}.`);
//         } else if (!result.matchedCount) {
//             res.status(404).send(`Failed to find un plan: ID ${id}`);
//         } else {
//             res.status(304).send(`Failed to update un plan: ID ${id}`);
//         }
//     } catch (error) {
//         console.error(error.message);
//         res.status(400).send(error.message);
//     }
// });

// planesRouter.delete("/:id", async (req, res) => {
//     try {
//         const id = req?.params?.id;
//         const query = { _id: new mongodb.ObjectId(id) };
//         const result = await collections.todoslosplanes.deleteOne(query);

//         if (result && result.deletedCount) {
//             res.status(202).send(`Removed un plan: ID ${id}`);
//         } else if (!result) {
//             res.status(400).send(`Failed to remove un plan: ID ${id}`);
//         } else if (!result.deletedCount) {
//             res.status(404).send(`Failed to find un plan: ID ${id}`);
//         }
//     } catch (error) {
//         console.error(error.message);
//         res.status(400).send(error.message);
//     }
// });
