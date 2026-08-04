import React from "react";
import { IProduct } from "./product.interface";

export interface IProductCardProps { 
  card: IProduct;   
}

export interface IProductCardGridProps {
  children: React.ReactNode;
}