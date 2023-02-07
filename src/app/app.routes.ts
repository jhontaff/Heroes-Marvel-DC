import { AboutComponent } from './componentes/about/about.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { HeroeComponent } from './componentes/heroe/heroe.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { Error404Component } from './componentes/error404/error404.component';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from './componentes/home/home.component';

//Ruta de la página localhost.../hash(#)/home
const APP_ROUTES : Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'error404'},
  { path: 'error404', component: Error404Component }
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true})
