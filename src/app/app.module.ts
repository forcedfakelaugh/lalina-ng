import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { ServiceComponent } from './components/service/service.component';
import { ImgGridComponent } from './components/img-grid/img-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    FooterBarComponent,
    HomeMainComponent,
    AboutComponent,
    MenuComponent,
    ServiceComponent,
    ImgGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
