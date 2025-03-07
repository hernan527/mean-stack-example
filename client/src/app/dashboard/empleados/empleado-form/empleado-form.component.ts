import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Empleado } from '../../../interfaces/empleados';

@Component({
  selector: 'app-empleado-form',
  template: `
    <form class="employee-form" autocomplete="off" [formGroup]="empleadoForm" (ngSubmit)="submitForm()">
      <div class="form-floating mb-3">
        <input class="form-control" type="text" id="name" formControlName="name" placeholder="Name" required>
        <label for="name">Name</label>
      </div>


      <div *ngIf="name.invalid && (name.dirty || name.touched)" class="alert alert-danger">
        <div *ngIf="name.errors?.['required']">
          Name is required.
        </div>
        <div *ngIf="name.errors?.['minlength']">
          Name must be at least 3 characters long.
        </div>
      </div>

      <div class="form-floating mb-3">
        <input class="form-control" type="text" formControlName="position" placeholder="Position" required>
        <label for="position">Position</label>
      </div>

      <div *ngIf="position.invalid && (position.dirty || position.touched)" class="alert alert-danger">

        <div *ngIf="position.errors?.['required']">
          Position is required.
        </div>
        <div *ngIf="position.errors?.['minlength']">
          Position must be at least 5 characters long.
        </div>
      </div>

      <div class="mb-3">
        <div class="form-check">
          <input class="form-check-input" type="radio" formControlName="level" name="level" id="level-junior" value="junior" required>
          <label class="form-check-label" for="level-junior">Junior</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" formControlName="level" name="level" id="level-mid" value="mid">
          <label class="form-check-label" for="level-mid">Mid</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" formControlName="level" name="level" id="level-senior"
            value="senior">
          <label class="form-check-label" for="level-senior">Senior</label>
        </div>
      </div>

      <button class="btn btn-primary" type="submit" [disabled]="empleadoForm.invalid">Add</button>
    </form>
  `,
  styles: [
    `.employee-form {
      max-width: 560px;
      margin-left: auto;
      margin-right: auto;
    }`
  ]
})
export class EmpleadoFormComponent implements OnInit {
  @Input()
  initialState: BehaviorSubject<Empleado> = new BehaviorSubject({});

  @Output()
  formValuesChanged = new EventEmitter<Empleado>();

  @Output()
  formSubmitted = new EventEmitter<Empleado>();

  empleadoForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  get name() { return this.empleadoForm.get('name')!; }
  get position() { return this.empleadoForm.get('position')!; }
  get level() { return this.empleadoForm.get('level')!; }
  get clincias() { return this.empleadoForm.get('clinicas')!; }


  ngOnInit() {
    this.initialState.subscribe(employee => {
      this.empleadoForm = this.fb.group({
        name: [ employee.name, [Validators.required] ],
        position: [ employee.position, [ Validators.required, Validators.minLength(5) ] ],
        level: [ employee.level, [Validators.required] ],
      });
    });

    this.empleadoForm.valueChanges.subscribe((val) => { this.formValuesChanged.emit(val); });
  }

  submitForm() {
    this.formSubmitted.emit(this.empleadoForm.value);
  }
}
