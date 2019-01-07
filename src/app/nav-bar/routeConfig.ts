import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "../about/about.component";
import { Routes } from "@angular/router";

export const routeConfig: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  }
];
