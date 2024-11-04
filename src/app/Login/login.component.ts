import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  standalone: true,
  templateUrl: 'login.component.html',
  styleUrl: 'login.component.scss',
  imports: [
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;
  hide = true; // For toggling password visibility

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      let email = this.myForm.get('email')?.value;
      let password = this.myForm.get('password')?.value;
      if (
        this.loginService.users.find(
          (user) => user.email === email && user.password === password
        )
      ) {
        this.loginService.loginUser ({email: email, password: password });
        this.router.navigate(['']);

      } else {
      }

      this.myForm.reset();
    }
  }
}
