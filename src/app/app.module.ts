import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { routeConfig } from "./nav-bar/routeConfig";

@NgModule({
  declarations: [AppComponent, NavBarComponent, HomeComponent, AboutComponent],
  imports: [BrowserModule, RouterModule.forRoot(routeConfig)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
