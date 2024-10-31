import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

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
        ReactiveFormsModule
      ]
})

export class LoginComponent implements OnInit {

    myForm!: FormGroup;
    hide = true; // For toggling password visibility
  
    
    constructor() { }

    ngOnInit() { 
        this.myForm = new FormGroup({
            name: new FormControl(''),
            email: new FormControl(''),
            password: new FormControl('')
          });
    }

    onSubmit() {
        if (this.myForm.valid) {
          console.log(this.myForm.value);
          this.myForm.reset();
        }
      }

}