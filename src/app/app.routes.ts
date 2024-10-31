import { Routes } from '@angular/router';
import { Dashboard } from './Dashboard/dashboard.component';
import { Tables } from './Tables/tables.component';

export const routes: Routes = [{path: 'dashboard', component:  Dashboard}, {path: 'tables', component: Tables}];
