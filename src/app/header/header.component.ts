import { Component, inject, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LoginService } from '../Login/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [MatSlideToggleModule]
})
export class HeaderComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() { }

  onLogout(){
    this.loginService.logoutUser(this.loginService.currenLogUser);
    this.router.navigate(['login'])
  }
}