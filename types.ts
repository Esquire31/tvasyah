
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  tagline: string;
  rating: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  initials: string;
}

export interface NavItem {
  label: string;
  href: string;
}
