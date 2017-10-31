import { Component } from '@angular/core';
import {FormGroup , FormBuilder , FormControl , Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  template : `
    <h3>Belajar Reactive form </h3>
    
    <!--tanpa formGroup hanya single form control-->
    <div>
      <input [formControl]="nama" /><br/>
      <p>{{nama.value}} isValid : {{nama.valid}} </p>
    </div>
    
    <!--dengan formGroup-->
    <form [formGroup]="myFormGroup" novalidate>
      <div>
        <input formControlName="namaGroup"/>
      </div>
    </form>
    <p>FormGroup value : {{myFormGroup.value | json}}</p>
    <p>FormGroup valid : {{myFormGroup.valid | json}}</p>
    
    <!--dengan FormBuilder-->
    <div>
      <form [formGroup]="formGroupBuilder">
        <div>
          <input formControlName="nameBuilder" /><br/>
          <span [hidden]="formGroupBuilder.get('nameBuilder').valid || formGroupBuilder.get('nameBuilder').pristine">Nama masih kosong</span>
        </div>
        <div>
          <button [disabled]="!formGroupBuilder.valid">Submit data</button>
        </div>
      </form>
    </div>
    
    <p>FormGroupBuilder isValid : {{formGroupBuilder.valid}}</p>
    <p>FormGroupBuilder : {{formGroupBuilder.value | json}}</p>
    <p>Form status : {{formGroupBuilder.status}}</p>
    
    <p>Form InputNameBuilder : {{formGroupBuilder.get('nameBuilder').value}}</p>
  `
})
export class AppComponent {
  title = 'app';
  nama = new FormControl();



  myFormGroup = new FormGroup({
    namaGroup : new FormControl()
  });



  formGroupBuilder : FormGroup;

  constructor(private formBuilder : FormBuilder){
    this.initFormGroupWithFormBuilder();
  }

  initFormGroupWithFormBuilder(){
    this.formGroupBuilder = this.formBuilder.group({
      nameBuilder : ['',Validators.required]
    });

  }



}
