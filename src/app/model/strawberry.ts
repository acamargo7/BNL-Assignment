import { Fruit } from "./fruit";

export class Strawberry implements Fruit {
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
      //takes 4-6 weeks days to ripen
    }
}