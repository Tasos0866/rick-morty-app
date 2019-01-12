import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "../about/about.component";
import { Routes } from "@angular/router";
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';

export const routeConfig: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  { path: '**', component: PageNotFoundComponent }
];
