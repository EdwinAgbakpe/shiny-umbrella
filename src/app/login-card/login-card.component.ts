import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit {

  signInForm = this.formBuilder.group({
    email: '',
    password: '',
  })
  constructor(
    private formBuilder: FormBuilder
  ){}

  onSubmit (): void {
    window.alert('Login Attempted');
    console.warn('Login form submitted', this.signInForm.value);
    this.signInForm.reset();
  }

  ngOnInit(): void {
  }

}
