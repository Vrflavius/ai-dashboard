import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from '../Menu/menu.component';
import { LoginComponent } from '../Login/login.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrl: 'home.component.scss',
    imports: [RouterOutlet, HeaderComponent, MenuComponent, LoginComponent],
    standalone: true
})

export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}