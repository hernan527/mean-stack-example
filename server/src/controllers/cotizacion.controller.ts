import { Request, Response } from 'express';

export const cotizacionController = {
  calcularPrecio: (req: Request, res: Response) => {
    const formCotizar = req.body;
    console.log('Datos recibidos del formulario:', formCotizar);

    // Lógica para procesar los datos y devolver la respuesta correspondiente
    // ...

    const precioCalculado = 100; // Ejemplo de precio calculado
    res.status(200).json({ precio: precioCalculado });
  }
};
