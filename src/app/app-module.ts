import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HeroesList } from './heroes/heroes-list/heroes-list';
import { Distancia } from './formularios/distancia/distancia';

@NgModule({
  declarations: [
    App,
    HeroesList
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Distancia
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App]
})
export class AppModule {}