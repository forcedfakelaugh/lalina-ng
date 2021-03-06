import { ServiceComponent } from './components/service/service.component';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BirthdayComponent } from './components/birthday/birthday.component';

const routes: Routes = [
  { path: '', component: HomeMainComponent },
  { path: 'home', component: HomeMainComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'birthday', component: BirthdayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
