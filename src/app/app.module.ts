import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './navegacao/home/home.component';
import { rootRouterConfig } from './app.routes';
import { MenuComponent } from './navegacao/menu/menu.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    ContatoComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false})]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
