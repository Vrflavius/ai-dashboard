import { Routes } from '@angular/router';
import { DashboardComponent } from '../Dashboard/dashboard.component';
import { TablesComponent } from '../Tables/tables.component';


export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'tables', component: TablesComponent },
]