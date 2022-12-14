import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    fName: new FormControl(''),
    lName: new FormControl(''),
  });
  submitted = false;
  

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required]
    })
  }

  get f(): { [key:string]: AbstractControl }{
    return this.form.controls;
  }

  onSubmit(): void{
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }



}
