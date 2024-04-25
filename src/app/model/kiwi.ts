import { Fruit } from "./fruit";

export class Kiwi implements Fruit {
  name: string;
  weight: number;
  color: string;
  price: number;
  datePicked: Date;
  hasSeed: boolean;

  constructor(name: string, weight: number, color: string, price: number, datePicked: Date, hasSeed: boolean) {
    this.name = name;
    this.weight = weight;
    this.color = color;
    this.price = price;
    this.datePicked = datePicked;
    this.hasSeed = hasSeed;
  }
    public madeEditable(): void {
      //takes 3-5 days to ripen

      //check the day and compare with the number of days to ripe
      //check color to see if it matches the color of when it's ripen
    }
}
