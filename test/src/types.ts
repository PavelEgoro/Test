export type Item = Product | PricePlan | Page;

  export interface Product {
    id: number;
    name: string;
    active: boolean;
    createdAt: string;
  }
  
  export interface PricePlan {
    id: number;
    description: string;
    active: boolean;
    createdAt: string;
    removedAt?: string;
  }
  
  export interface Page {
    id: number;
    title: string;
    active: boolean;
    updatedAt: string;
    publishedAt: string;
  }
  
  // Интерфейс для структуры вашего data.json
  export interface Data {
    products: Product[];
    pricePlans: PricePlan[];
    pages: Page[];
  }
  