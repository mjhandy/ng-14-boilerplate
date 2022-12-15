import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  submitted = false;
  namePattern = '[a-zA-Z]';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  passwordPattern = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$';
  userForm = new FormGroup({
    fName: new FormControl('',[
      Validators.required,
      Validators.pattern(this.namePattern),
    ]),
    lName: new FormControl('',[
      Validators.required,
      Validators.pattern(this.namePattern),
    ]),
    email: new FormControl('',[
      Validators.required,
      Validators.pattern(this.emailPattern),
    ]),
    pWord: new FormControl('',[
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(this.passwordPattern)
    ])
  });

  

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

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


