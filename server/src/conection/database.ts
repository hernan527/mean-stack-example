import * as mongodb from "mongodb";
import { Employee } from "../interfaces/employee";
import { Empresa } from "../interfaces/empresas";
import { Planes } from "../interfaces/planes";
import { Clinicas } from "../interfaces/clinicas";
import { Precios } from "../interfaces/precios";



export const collections: {
    employees?: mongodb.Collection<Employee>,
    empresas?: mongodb.Collection<Empresa>,
    todoslosplanes?: mongodb.Collection<Planes>,
    clinicas?: mongodb.Collection<Clinicas>,
    preciosSancor?: mongodb.Collection<Precios>,
    preciosOmint?: mongodb.Collection<Precios>,
    preciosSwiss?: mongodb.Collection<Precios>,
    preciosAvalian?: mongodb.Collection<Precios>,
    preciosMedife?: mongodb.Collection<Precios>,
    preciosGaleno?: mongodb.Collection<Precios>,
    preciosOsde?: mongodb.Collection<Precios>,
    preciosHominis?: mongodb.Collection<Precios>,
    preciosPremedic?: mongodb.Collection<Precios>,
    preciosDoctored?: mongodb.Collection<Precios>,
    preciosSaludCentral?: mongodb.Collection<Precios>,
} = {};

export async function connectToDatabase(uri: string) {
    const client = new mongodb.MongoClient(uri);
    await client.connect();

    const db = client.db("api-crud");
    const db1 = client.db("planes");
    const db2 = client.db("precios");


    await applySchemaValidation(db);
    await applySchemasValidation(db1);

    const employeesCollection = db.collection<Employee>("employees");
    collections.employees = employeesCollection;
    
    await applySchemaValidation(db1);
    
    const empresasCollection = db1.collection<Empresa>("empresas");
    collections.empresas = empresasCollection;

    const todoslosplanesCollection = db1.collection<Planes>("todoslosplanes");
    collections.todoslosplanes = todoslosplanesCollection;

    const clinicasCollection = db1.collection<Clinicas>("clinicas");
    collections.clinicas = clinicasCollection;

    const sancorCollection = db2.collection<Precios>("Sancor"); 
    collections.preciosSancor = sancorCollection;

    const omintCollection = db2.collection<Precios>("Omint"); 
    collections.preciosOmint = sancorCollection;

    const swissCollection = db2.collection<Precios>("Swiss"); 
    collections.preciosSwiss = swissCollection;

    const avalianCollection = db2.collection<Precios>("Avalian"); 
    collections.preciosAvalian = avalianCollection;

    const medifeCollection = db2.collection<Precios>("Medife"); 
    collections.preciosMedife = medifeCollection;

    const galenoCollection = db2.collection<Precios>("Galeno"); 
    collections.preciosGaleno = galenoCollection;

    const osdeCollection = db2.collection<Precios>("Osde"); 
    collections.preciosOsde = osdeCollection;

    const hominisCollection = db2.collection<Precios>("Hominis"); 
    collections.preciosHominis = hominisCollection;
    
    const premedicCollection = db2.collection<Precios>("Premedic"); 
    collections.preciosPremedic = premedicCollection;

    const doctoredCollection = db2.collection<Precios>("Doctored"); 
    collections.preciosDoctored = doctoredCollection;

    const saludCentralCollection = db2.collection<Precios>("SaludCentral"); 
    collections.preciosSaludCentral = saludCentralCollection;


}

// Update our existing collection with JSON schema validation so we know our documents will always match the shape of our Employee model, even if added elsewhere.
// For more information about schema validation, see this blog series: https://www.mongodb.com/blog/post/json-schema-validation--locking-down-your-model-the-smart-way
async function applySchemaValidation(db: mongodb.Db) {
    const jsonSchema = {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "position", "level"],
            additionalProperties: false,
            properties: {
                _id: {},
                name: {
                    bsonType: "string",
                    description: "'name' is required and is a string",
                },
                position: {
                    bsonType: "string",
                    description: "'position' is required and is a string",
                    minLength: 5
                },
                level: {
                    bsonType: "string",
                    description: "'level' is required and is one of 'junior', 'mid', or 'senior'",
                    enum: ["junior", "mid", "senior"],
                },
            },
        },
    };

    
    // Try applying the modification to the collection, if the collection doesn't exist, create it 
   await db.command({
        collMod: "employees",
        validator: jsonSchema
    }).catch(async (error: mongodb.MongoServerError) => {
        if (error.codeName === "NamespaceNotFound") {
            await db.createCollection("employees", {validator: jsonSchema});
        }
    });
    
}

//--------------------------------------------------------------------------------------
async function applySchemasValidation(db1: mongodb.Db) {


const empresasSchema = {
    $jsonSchema: {
        bsonType: "object",
        required: ["name", "address"],
        additionalProperties: false,
        properties: {
            _id: {},
            name: {
                bsonType: "string",
                description: "'name' is required and is a string",
            },
            address: {
                bsonType: "string",
                description: "'address' is required and is a string",
                minLength: 5
            },
        },
    },
};

const planesSchema = {
    $jsonSchema: {
        bsonType: "object",
        required: ["name", "price"],
        additionalProperties: false,
        properties: {
            _id: {},
            name: {
                bsonType: "string",
                description: "'name' is required and is a string",
            },
            price: {
                bsonType: "number",
                description: "'price' is required and is a number",
                minimum: 0
            },
        },
    },
};

await db1.command({
    collMod: "empresas",
    validator: empresasSchema
}).catch(async (error: mongodb.MongoServerError) => {
    if (error.codeName === "NamespaceNotFound") {
        await db1.createCollection("empresas", {validator: empresasSchema});
    }
});

await db1.command({
    collMod: "todoslosplanes",
    validator: planesSchema
}).catch(async (error: mongodb.MongoServerError) => {
    if (error.codeName === "NamespaceNotFound") {
        await db1.createCollection("planes", {validator: planesSchema});
    }
});
  
}
    




    

   

    

    

