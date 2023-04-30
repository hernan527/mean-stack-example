import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {ServcioRetornoPrecioService} from '../../servicios/servcio-retorno-precio.service';



declare var agregarPrecio:any;
declare var valorOmint:any;
declare var conyuge:any;
declare var valorSancorSalud:any;
declare var valorPremedic:any;
declare var tipoAsociado: any;
declare var grupoFamiliar: any;
declare var productID: any;
declare var productIdGaleno: any;
declare var productIdPremedic: any;
declare var productIdOmint: any;
declare var productIdOmint: any;




  @Component({
    selector: 'app-cotizar-form',
    templateUrl: './cotizar-form.component.html',
    styleUrls: ['./cotizar-form.component.scss']
})
export class CotizarFormComponent implements OnInit {
   
  // preciosToHome:[];



  public formCotizar!: FormGroup<any>;

preciosToHome=[];


constructor(
  private fb: FormBuilder,
    private retornarService: ServcioRetornoPrecioService,
  
  ) { 
    this.buildForm();

   
  } 


  private buildForm(){
    this.formCotizar =this.fb.group({
      grupo: ['', Validators.min(1)],
      empresa_prepaga: ['0'],
      edad_1: ['18', [Validators.required, Validators.min(18), Validators.max(64)]],
      edad_2: ['0'],
      numkids: ['0'],
      

      
      
      tipo: [''],
      agree: [''],
      aporteOS: [''],
      sueldo: [''],
      aporte: [''],
      monoadic: [''],
      cantAport: [''],
      afinidad: [''],
      bonAfinidad: [''],
      supras: [false],
      segvida: [false],
      segvida1: [false],
      region: [''],
      // personalData: this.fb.group({
        // name: ['',[Validators.required, Validators.maxLength(10),Validators.pattern(/^[a-zA-Z\s]*$/)]],
        // email: ['',[Validators.required,Validators.email]],
        // phone: ['',Validators.required],
        // region: [''],
        // name: [''],
        // email: [''],
        // phone: [''],
        // region: [''],
      // })
      
    })   }


  


save(event: Event){
  if(this.formCotizar.valid){
    console.log(this.formCotizar);
    this.retornarService.disparadorDePrecio.next(this.formCotizar);
    console.log('Enviando datos...',this.formCotizar);
  } else {
    this.formCotizar.markAllAsTouched();
  };
 
  console.log(this.formCotizar);


  
  let edad1 = this.formCotizar.value.edad_1;
  let edad2 = this.formCotizar.value.edad_2;
  let kids =  this.formCotizar.value.numkids; 
  // funcion1();

 let grupo = grupoFamiliar(edad1, edad2, kids);
 let num_adultos = grupo[0]; //checked
 
 let numhijo1 = grupo[1]; //checked

 let numhijo2 = grupo[2]; //checked
 
 let numHijos = grupo[3]; //checked

 let numhijos = grupo[3]; //checked

 let gen = grupo[4]; //checked

 let grupoFam = grupo[5];


 let tipoIngreso = this.formCotizar.value.tipo;
 let monoAdicional = this.formCotizar.value.monoadic;
 let cantAport = this.formCotizar.value.cantAport;
 
 
 if (tipoIngreso == "M" || tipoIngreso == "D" && monoAdicional == true) {
  if (cantAport > grupoFam) {
      alert("El número de aportantes no puede ser mayor a los integrantes del grupo familiar. Calcularemos con la cantidad máxima");
      cantAport = grupoFam
  };
}


}



 
  


ngOnInit()
  {
 
    this.onChanges();


    
  }
  onChanges(): void {
    this.formCotizar.get('grupo')?.valueChanges.subscribe(val => {
});
  }

  getNameValue() {
    console.log(this.nameField?.value);
  }
  setGrupo(value: number) {
    this.formCotizar.patchValue({
      grupo: value
    });
  }
  
  get grupoField (){
    const nameControl = this.formCotizar.get('grupo');
    const nameValue = nameControl?.value;
    return nameValue
  }
 
  get prepagaField(){
    const nameControl = this.formCotizar.get('empresa_prepaga');
    const nameValue = nameControl?.value;
    return nameValue

  }

  get age1Field(){
    const nameControl = this.formCotizar.get('edad_1');
    const nameValue = nameControl?.value;
    return nameValue
  }
  get age2Field(){
    const nameControl = this.formCotizar.get('edad_2');
    const nameValue = nameControl?.value;
    return nameValue
  }

get hijosField(){
  const nameControl = this.formCotizar.get('numkids');
  const nameValue = nameControl?.value;
  return nameValue
}
get tipoField(){
  const nameControl = this.formCotizar.get('tipo');
  const nameValue = nameControl?.value;
  return nameValue
}
get ingresoField(){
  const nameControl = this.formCotizar.get('sueldo');
  const nameValue = nameControl?.value;
  return nameValue
}

get aporteosField(){
  const nameControl = this.formCotizar.get('aporteOS');
  const nameValue = nameControl?.value;
  return nameValue
}

get sueldoField(){
  const nameControl = this.formCotizar.get('sueldo');
  const nameValue = nameControl?.value;
  return nameValue
}
get aporteField(){
  const nameControl = this.formCotizar.get('sueldo');
  const nameValue = nameControl?.value;
  return nameValue
}
get regionField(){
  const nameControl = this.formCotizar.get('region');
  const nameValue = nameControl?.value;
  return nameValue
}
get monoadicField (){
  const nameControl = this.formCotizar.get('c');
  const nameValue = nameControl?.value;
  return nameValue
}
get cantAport(){
  const nameControl = this.formCotizar.get('cantAport');
  const nameValue = nameControl?.value;
  return nameValue
}
get afinidadField (){
  const nameControl = this.formCotizar.get('afinidad');
  const nameValue = nameControl?.value;
  return nameValue
}
get bonAfinidadField (){
  const nameControl = this.formCotizar.get('bonAfinidad');
  const nameValue = nameControl?.value;
  return nameValue
}
get segvida(){
  const nameControl = this.formCotizar.get('segvida');
  const nameValue = nameControl?.value;
  return nameValue
}
get segvida1(){
  const nameControl = this.formCotizar.get('segvida1');
  const nameValue = nameControl?.value;
  return nameValue
}

get nameField(){
  const nameControl = this.formCotizar.get('personalData.name');
  const nameValue = nameControl?.value;
  return nameValue
  }

get emailField(){
  const nameControl = this.formCotizar.get('personalData.email');
  const nameValue = nameControl?.value;
  return nameValue
}
get phoneField(){
  const nameControl = this.formCotizar.get('personalData.phone');
  const nameValue = nameControl?.value;
  return nameValue
}

get agreeField(){
  const nameControl = this.formCotizar.get('agree');
  const nameValue = nameControl?.value;
  return nameValue
}
 
}


