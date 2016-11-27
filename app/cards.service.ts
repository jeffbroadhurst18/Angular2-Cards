import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Card } from './card';

@Injectable()
export class CardService {
    suits: string[];
    faces: string[];
    cardList: Card[];

    constructor() {
        this.suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
        this.faces = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
        this.cardList = new Array<Card>();
    }

    generateCards(): Card[] {

        for (var j = 0; j < 4; j++) {
            for (var i = 0; i < 13; i++) {
                var card = { suit: this.suits[j], face: this.faces[i], cardValue: i };
                this.cardList.push(card);
            }
        }
        return this.cardList;
    };
}


