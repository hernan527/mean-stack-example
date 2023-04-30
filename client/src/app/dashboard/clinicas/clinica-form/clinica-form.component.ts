import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Clinicas } from '../../../interfaces/clinicas';


@Component({
  selector: 'app-clinicas-form',
  templateUrl: './clinica-form.component.html',
  styleUrls: [ './clinica-form.component.css',  ]
})
export class ClinicasFormComponent implements OnInit {
  @Input()
  initialState: BehaviorSubject<Clinicas> = new BehaviorSubject({});
    @Output()
    
  formValuesChanged = new EventEmitter<Clinicas>();

  @Output()
  formSubmitted = new EventEmitter<Clinicas>();

  clinicaForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }
  get nombre() { return this.clinicaForm.get('nombre'); }
 
  
  

  

  ngOnInit() {
    this.initialState.subscribe(clinica => {
      this.clinicaForm = this.fb.group({

        nombre: [ clinica.nombre ],
      
      });
    });

    this.clinicaForm.valueChanges.subscribe((val) => { this.formValuesChanged.emit(val); });
  }
 
  submitForm() {
    console.log(this.clinicaForm)
    this.formSubmitted.emit(this.clinicaForm.value);
  }
}
