export interface Menu {
    path: string;
    name: string;
  }
  
  export const menuList: Menu[] 
  = [
    {
     path: '/planes',
      name: 'Planes'
    },
    {
      path: '/sobrenosotros',
      name: 'SobreNosotros'
    },
    {
      path: '/contacto',
      name: 'Contacto'
    },
    {
      path: '/dashboard',
      name: 'Dashboard'
    },
    {
      path: '/prepagas',
      name: 'Prepagas'
    },
    {
      path: '/clinicas',
      name: 'Clinicas'
    },
    {
      path: '/detalles',
      name: 'Detalles'
    },
       {
      path: '/buscador',
      name: 'Buscador'
    }
  ];