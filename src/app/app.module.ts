import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './navegacao/home/home.component';
import { rootRouterConfig } from './app.routes';
import { MenuComponent } from './navegacao/menu/menu.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ArmasService } from './armas/armas.service';
import { ListaArmasComponent } from './armas/lista-armas/lista-armas.component';
import { ArmaComponent } from './armas/arma/arma.component';
import { LoginComponent } from './user/login/login.component';
import { CreateComponent } from './user/create/create.component';
import { VideosComponent } from './videos/videos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    ContatoComponent,
    SobreComponent,
    ListaArmasComponent,
    ArmaComponent,
    LoginComponent,
    CreateComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    YouTubePlayerModule,
    AppRoutingModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false})]
  ],
  providers: [
    ArmasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
