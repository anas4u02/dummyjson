import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComponent} from "./product.component";
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from "@angular/material/icon";
import {ProductRoutingModule} from "./product-routing.module";
import {MatDividerModule} from "@angular/material/divider";
import {
  MatCellDef,
  MatHeaderCellDef,
  MatHeaderRowDef,
  MatRowDef,
  MatTable,
  MatTableModule
} from "@angular/material/table";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    ProductRoutingModule,
    MatDividerModule,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatTable,
    MatTableModule,
    HttpClientModule
  ]
})
export class ProductModule {
}
