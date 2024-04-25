import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Fruit } from './model/fruit';
import { FruitService } from './service/fruit-service';
import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, NgStyle, formatDate } from '@angular/common';
import { NgbDate, NgbDateStruct, NgbDatepickerModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import * as FileSaver from 'file-saver';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DecimalPipe, DatePipe, CurrencyPipe, NgbDatepickerModule, FormsModule, JsonPipe, NgStyle, CurrencyPipe, TableModule, ButtonModule, TooltipModule, InputTextModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'BNLAssignment';
  model!: NgbDateStruct;

  public fruits: Fruit[] = [];

  public filteredFruits: Fruit[] = [];
  public searchValue: string;

  constructor(private fruitService: FruitService) {
    this.fruits = this.fruitService.getFruits();
    this.searchValue = '';
  }

  ngOnInit() {
    this.filteredFruits = [...this.fruits];
  }

  public updateBasedOnDate($event: NgbDateStruct) {
    let date = new Date($event.year, $event.month-1, $event.day);
    let newList = this.fruits.filter(x => formatDate(x.datePicked, 'yyyy-MM-dd', 'en_US') == formatDate(date, 'yyyy-MM-dd', 'en_US'));
    this.filteredFruits = [...newList];
  }

  public reset() {
    this.filteredFruits = [...this.fruits];
    this.searchValue = '';
  }

  public exportExcel() {
    //need to install npm i xlsx
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.filteredFruits);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, 'products');
    });
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  public search(item: any) {
    console.log(item);
    console.log(this.fruits);
    let searchTerm = item.toLowerCase();

    if (searchTerm === '') {
      this.filteredFruits = [...this.fruits];
    } else {
      let filterList = this.fruits.filter(fruit => {
        let datePicked = formatDate(fruit.datePicked, 'M/d/yy', 'en_US');
        if (fruit.color.toLowerCase().includes(searchTerm)) { return true; }
        else if (fruit.price.toString().includes(searchTerm)) { return true }
        else if (datePicked.includes(searchTerm)) { return true; }
        else if (fruit.weight == searchTerm) { return true; }
        else if (fruit.name.toLowerCase().includes(searchTerm)) { return true; }
        else { return false; }
      });

      this.filteredFruits = [...filterList];
    }
  }
}
