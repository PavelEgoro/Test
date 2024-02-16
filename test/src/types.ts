export type Item = Product | PricePlan | Page;

  export interface Product {
    id: number;
    name: string;
    active: boolean;
    createdAt: string;
    type: 'Product';
  }
  
  export interface PricePlan {
    id: number;
    description: string;
    active: boolean;
    createdAt: string;
    removedAt?: string;
    type: 'PricePlan'
  }
  
  export interface Page {
    id: number;
    title: string;
    active: boolean;
    updatedAt: string;
    publishedAt: string;
    type: 'Page';
  }
  
  export interface Data {
    products: Product[];
    pricePlans: PricePlan[];
    pages: Page[];
  }
  