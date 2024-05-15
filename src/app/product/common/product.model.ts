export class Product {
  title: string;
  description?:string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export class ProductOutDto extends Product {
  id: string;
}