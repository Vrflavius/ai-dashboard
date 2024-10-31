import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menu-component',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  listMenuItems = [
    {
      name: 'Dashboard',
      isSelected: false,
      icon: 'fas fa-home',
      route: '/dashboard',
    },
    {
      name: 'Components',
      isSelected: false,
      icon: '',
    },

    {
      name: 'Charts',
      isSelected: false,
      icon: '',
    },
    {
      name: 'UI Features',
      isSelected: false,
      icon: '',
    },
    {
      name: 'Form Elements',
      isSelected: false,
      icon: '',
    },
    {
      name: 'Tables',
      isSelected: false,
      icon: 'fas fa-table',
      route: '/tables'
    },
  ];

  constructor(private router: Router) {

  }
  selectItem(menuItem: any) {
    this.listMenuItems.forEach((item) => {
      item.isSelected = false;
    });
    menuItem.isSelected = true;
    this.router.navigate([menuItem.route]);
  }
}
