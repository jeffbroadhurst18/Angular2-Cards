import { Component, OnInit } from '@angular/core';
import { CardService } from './cards.service';
import { Card } from './card';

@Component({
    moduleId: module.id,
    selector: 'my-cards',
    templateUrl: 'cards.component.html',
    styleUrls: ['cards.component.css']
})

export class CardsComponent implements OnInit {
    constructor(private CardService: CardService) {

    }
    cards: Card[];

    ngOnInit(): void {
      this.cards =  this.generateCards();
    }

    generateCards(): Card[] {
        var newCards = this.CardService.generateCards(); 
        return newCards;
    }
}
