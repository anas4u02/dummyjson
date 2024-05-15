import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ProductService} from "./common/product.service";
import {ProductOutDto} from "./common/product.model";
import {BehaviorSubject} from "rxjs";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})


export class ProductComponent implements OnInit, AfterViewInit {

  productOutDtos: ProductOutDto[];
  myDataSource = new MatTableDataSource<ProductOutDto>();
  isLoading: boolean = false;


  constructor(private productService: ProductService) {
  }

  displayedColumns: string[] = ['id', 'title', 'price', 'discountPercentage'];
  dataSource = ELEMENT_DATA;

  // getAllProducts(): void {
  //   this.productService.findAll().subscribe(productOutDtos => {
  //     this.productOutDtos = productOutDtos;
  //     console.log(this.productOutDtos)
  //     // this.myDataSource.data = new MatTableDataSource(this.productOutDtos);
  //     const dataArray = this.productOutDtos;
  //     this.myDataSource.data = dataArray;
  //     console.log("Data Array", this.myDataSource.data);
  //   });
  // }

  productSource = new BehaviorSubject<ProductOutDto[]>([]);

  getAllProducts(): void {
    this.productService.findAll().subscribe(productOutDtos => {
      this.productSource.next(productOutDtos);
    });
  }

  ngOnInit(): void {
    this.getAllProducts();

    this.productSource.subscribe(productOutDtos => {
      this.myDataSource.data = productOutDtos;
      console.log("Data Array", this.myDataSource.data); // This should now log the data
    });
  }

  // ngOnInit(): void {
  // }

  ngAfterViewInit(): void {
    this.getAllProducts();
    // console.log("MY DataSource");
    // console.log(this.myDataSource);
  }
}
