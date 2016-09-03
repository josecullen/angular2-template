/**
 * Created by josecullen on 28/08/16.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { AppComponent }  from './app.component';
import {HomeComponent} from "./home/home.component";
import {ForumComponent} from "./forum/forum.component";
import {ContactComponent} from "./contact/contact.component";
import {UsComponent} from "./us/us.component";

@NgModule({
    imports:      [ BrowserModule, routing ],
    declarations: [ AppComponent, HomeComponent, ForumComponent, ContactComponent, UsComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
