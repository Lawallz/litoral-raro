export type Brand = 'Nike' | 'Jordan' | 'Asics' | 'New Balance';
export type Silhouette = 'Low Top' | 'Mid Top' | 'High Top';
export type ProductTag = 'ÚLTIMAS UNIDADES' | 'DISPONÍVEL' | 'SOB ENCOMENDA' | 'DROP EXCLUSIVO' | 'EXCLUSIVO';

export interface Sneaker {
  id: string;
  name: string;
  brand: Brand;
  silhouette: Silhouette;
  price: number;
  image: string;
  tag?: ProductTag;
  colors: string;
  sizes: number[];
  description: string;
}

export interface BagItem {
  sneaker: Sneaker;
  selectedSize: number;
  quantity: number;
}

export interface FilterState {
  search: string;
  brands: Brand[];
  silhouettes: Silhouette[];
  sizes: number[];
  maxPrice: number;
  sortBy: 'highlights' | 'price-asc' | 'price-desc';
}

export interface Testimonial {
  id: string;
  name: string;
  stars: number;
  comment: string;
  role: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
