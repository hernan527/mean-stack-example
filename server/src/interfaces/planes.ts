import { Imagen as MiImagen } from './interfaces';
import * as mongodb from "mongodb";


export interface Planes {
  price?: string;
  precio?: string;
  rating?: '1' | '2' | '3'| '4' | '5';
  copagos?: string;
  category?: 'inferior' | 'intermedio' | 'superior';
  tags?: string;
  hijosSolos?: string;
  name: string;
  
}

// export interface Planes {
//     name: string;
//     position: string;
//     level: "junior" | "mid" | "senior";
//     _id?: mongodb.ObjectId;
// }
