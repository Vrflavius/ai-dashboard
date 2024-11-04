import { Routes } from '@angular/router';
import { LoginComponent } from './Login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { TablesComponent } from './Tables/tables.component';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { UserGuard } from './guards/auth/user.guard';

export const routes: Routes = [
  { path: 'login', 
    canActivate: [AuthGuard], 
    component: LoginComponent},
  { 
    path: '', 
    canActivate: [UserGuard],
    component:AppComponent,
    children: [{
        path: '',
        component: HomeComponent,
        children: [{
            path: 'tables', 
            component: TablesComponent
        },
            {
                path: 'dashboard',
                component: DashboardComponent
            }
        ]
    }
        
    ]
}
];
