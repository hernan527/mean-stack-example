import * as mongodb from "mongodb";
import { Employee } from "../models/employee.model";
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


    // await applySchemaValidation(db);
    // await applySchemasValidation(db1);

    const employeesCollection = db.collection<Employee>("employees");
    collections.employees = employeesCollection;
    
    
    const empresasCollection = db1.collection<Empresa>("empresas");
    collections.empresas = empresasCollection;

    const planesCollection = db1.collection<Planes>("todoslosplanes");
    collections.todoslosplanes = planesCollection;

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

