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

    shuffle(cardList: Card[]): Card[] {
        for (var x = 0; x < 1000; x++) {
                var temp = cardList[0];
                var swappoint = Math.floor((Math.random() * 51) + 1);

                for (var y = 1; y < swappoint + 1; y++) {
                    cardList[y - 1] = cardList[y];
                }
                cardList[swappoint] = temp;
            }
                return cardList;
    }

    sort(cardList: Card[]) : Card[] {
       return cardList.sort(compare);
    }
}

function compare(a:Card, b:Card) {
  if (a.suit < b.suit)
    return -1;
  if (a.suit > b.suit)
    return 1;
  if (a.suit == b.suit && a.cardValue < b.cardValue)
   return -1;
  if (a.suit == b.suit && a.cardValue > b.cardValue)
  return 1;
  return 0;
}
