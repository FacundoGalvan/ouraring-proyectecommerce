import React from "react";
import { Product } from "./product.interface";

export interface ProductCardProps { 
  card: Product;   
}

export interface ProductCardGridProps {
  children: React.ReactNode;
}