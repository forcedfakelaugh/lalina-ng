import { HomeMainComponent } from './components/home-main/home-main.component';
import { StoryComponent } from './components/story/story.component';
import { MenuComponent } from './components/menu/menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeMainComponent },
  { path: 'home', component: HomeMainComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'story', component: StoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
