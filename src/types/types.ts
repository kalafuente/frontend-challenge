export interface Author {
  name: string;
  lastname: string;
}

export interface Price {
  currency: string;
  amount: number;
  decimals: number;
}

export interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  location: string; //No aparece en la consigna
}

export interface SearchResponse {
  author: Author;
  categories: string[];
  items: Item[];
}

export interface ItemDetail {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
}

export interface ItemResponse {
  author: Author;
  categories: string[];
  item: ItemDetail;
}