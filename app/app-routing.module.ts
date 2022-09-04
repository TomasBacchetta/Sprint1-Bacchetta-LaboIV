import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Vistas/home/home.component';
import { LoginComponent } from './Vistas/login/login.component';
import { QuienSoyComponent } from './Vistas/quien-soy/quien-soy.component';

const routes: Routes = [
  {path : '', component : LoginComponent},
  {path : 'home', component : HomeComponent},
  {path : 'quiensoy', component : QuienSoyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
