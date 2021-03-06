import { Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ListaArmasComponent } from './armas/lista-armas/lista-armas.component';
import { ArmaComponent } from './armas/arma/arma.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'contato', component:  ContatoComponent},
    { path: 'home', component: HomeComponent},
    { path: 'sobre', component:  SobreComponent},
    { path: 'armas', component:  ListaArmasComponent},
    { path: 'carrinho/:id', component:  ListaArmasComponent},
    { path: 'armas/:search', component:  ListaArmasComponent},  
    { path: 'arma/:id', component:  ArmaComponent}  
];