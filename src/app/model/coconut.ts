import { Fruit } from "./fruit";

export class Coconut implements Fruit {
  weight: number;
  color: string;
  price: number;
  datePicked: Date;
  hasSeed: boolean;

  constructor(weight: number, color: string, price: number, datePicked: Date, hasSeed: boolean) {
    this.weight = weight;
    this.color = color;
    this.price = price;
    this.datePicked = datePicked;
    this.hasSeed = hasSeed;
  }
    public madeEditable(): void {
      //takes 12 months to ripen
      //check the day and compare with the number of days to ripe
      //check color to see if it matches the color of when it's ripen
      // we also might need to check the weight
    }
}
