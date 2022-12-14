import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  userForm = new FormGroup({
    fName: new FormControl(),
    lName: new FormControl()
  });
  submitted = false;
  namePattern = '[a-zA-Z]+'
  

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      fName: ['',
        Validators.required,],
      lName: ['', Validators.required]
    })
  }

  get getControl(){
    return this.userForm.controls;
  }  

  onSubmit(): void{
    this.submitted = true;

    if (this.userForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this.userForm.value, null, 2));
  }



}


