import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LoginService {
    users = [{
        email: 'ana@yahoo.com',
        password: '123456'
    },
    {
        email: 'ana2@yahoo.com',
        password: '123456'
    },
    {
        email: 'ana3@yahoo.com',
        password: '123456'
    }
    ];
    currenLogUser:{ email: string; password: string } | null = null;
    constructor() {
        if(localStorage.getItem('user')){
            this.currenLogUser = JSON.parse(localStorage.getItem("user") || '');
        }
        
     }

     loginUser(user: any){
        this.currenLogUser = user;
        localStorage.setItem("user", JSON.stringify(user));
    }
    
    logoutUser(user: any){
        this.currenLogUser = null;
        localStorage.removeItem('user');
    }
}