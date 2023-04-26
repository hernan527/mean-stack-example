
import { Ubicacion as MiUbicacion, Imagen as MiImagen } from './interfaces';

export interface Empresa {
  nombre: string;
  ubicacion?: MiUbicacion;
  sucursales?: MiUbicacion[];
  telefono?: string;
  imagen?: MiImagen[];
}
