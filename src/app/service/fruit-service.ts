
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Fruit } from "../model/fruit";
import { Apple } from "../model/apple";
import { Banana } from "../model/banana";
import { Cherry } from "../model/cherry";
import { Coconut } from "../model/coconut";
import { Strawberry } from "../model/strawberry";
import { Kiwi } from "../model/kiwi";

@Injectable({ providedIn: 'root' })
export class FruitService{
  constructor(private http: HttpClient) { }

  public getFruits() : Fruit[] {
    let collectionOfFruits: Fruit[] = [
      new Banana('Banana',5, 'Yellow', .7, new Date('04/05/2024'), false),
      new Apple('Apple',5, 'Red', .25, new Date('04/15/2024'), true),
      new Cherry('Cherry',1, 'Red', .1, new Date('04/05/2024'), false),
      new Coconut('Coconut',10, 'Brown', 7, new Date('02/05/2024'), false),
      new Strawberry('Strawberry',1, 'Red', 5, new Date('04/05/2024'), true),
      new Kiwi('Kiwi',2, 'Green', 5, new Date('04/05/2024'), true),
      new Coconut('Coconut', 10, 'Brown', 7, new Date('02/05/2024'),false),
      new Coconut('Coconut', 10, 'Brown', 7, new Date('04/15/2024'),false),
      new Banana('Banana', 5, 'Yellow', .7, new Date('04/05/2024'),false),
      new Strawberry('Strawberry', 1, 'Red', 5, new Date('04/15/2024'), true),
      new Strawberry('Strawberry', 1, 'Red', 5, new Date('04/05/2024'), true),
      new Kiwi('Kiwi', 2, 'Green', 5, new Date('04/05/2024'), true),
      new Coconut('Coconut', 10, 'Brown', 7, new Date('02/05/2024'), false),
      new Coconut('Coconut', 10, 'Brown', 7, new Date('04/15/2024'), false),
      new Banana('Banana', 5, 'Yellow', .7, new Date('04/05/2024'), false),
      new Strawberry('Strawberry', 1, 'Red', 5, new Date('04/15/2024'), true)   
    ];

    return collectionOfFruits;
  }

}
