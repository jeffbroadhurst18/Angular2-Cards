import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <my-cards></my-cards>
    `,
  styleUrls: ['app/app.component.css'],
})

export class AppComponent  { 
  title = 'Stupid, Stupid, Stupid';
}
