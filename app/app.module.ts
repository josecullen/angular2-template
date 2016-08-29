/**
 * Created by josecullen on 28/08/16.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { AppComponent }  from './app.component';

@NgModule({
    imports:      [ BrowserModule, routing ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
