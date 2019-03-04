import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AuthCredentials } from 'src/app/models/user.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup({
    userName: new FormControl('test', Validators.required),
    password: new FormControl('test', Validators.required)
  });

  @Input()
  loginErrorMessage: string;

  @Output()
  submitLogin: EventEmitter<AuthCredentials> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onSubmit(): void {
    this.submitLogin.emit(this.loginForm.value);
  }
}
