import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RepasCardComponent } from './component/cards/repas-card/repas-card.component';
import { AlimentCardComponent } from './component/cards/aliment-card/aliment-card.component';
import { RepasDashbordComponent } from './component/repas-dashbord/repas-dashbord.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    RepasCardComponent,
    AlimentCardComponent,
    RepasDashbordComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
