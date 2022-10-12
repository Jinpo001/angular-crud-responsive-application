import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'employees', loadChildren: () => import('./modules/employees/employees.module').then(m => m.EmployeesModule) },
  { path: 'cars', loadChildren: () => import('./modules/cars/cars.module').then(m => m.CarsModule) },
  { path: '**', redirectTo: 'employees' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
