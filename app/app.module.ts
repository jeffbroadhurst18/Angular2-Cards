import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { CardsComponent } from './cards.component';
import { CardService } from './cards.service';

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule ],
  declarations: [ AppComponent, CardsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CardService]
})
export class AppModule { }
