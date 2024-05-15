import { Injectable } from '@angular/core';
import {ProductDto, ProductOutDto} from "./product.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "https://dummyjson.com";
  private productUrl = "/products";

  constructor(private http: HttpClient) { }

  public findAll(): Observable<ProductOutDto[]> {
    return this.http.get<ProductOutDto[]>(`${this.getUrl()}`);
  }

  public findById(id: number): Observable<ProductOutDto> {
    return this.http.get<ProductOutDto>(`${this.getUrl()}/${id}`);
  }

  public create(product: ProductDto): Observable<ProductOutDto> {
    return this.http.post<ProductOutDto>(`${this.getUrl()}`, product);
  }

  public update(id: number, product: ProductDto): Observable<ProductOutDto> {
    return this.http.put<ProductOutDto>(`${this.getUrl()}/${id}`, product);
  }

  public delete(id: number): void {
    this.http.delete(`${this.getUrl()}/${id}`);
  }

  private getUrl(): string {
    return `${this.baseUrl}${this.productUrl}`
  }
}
