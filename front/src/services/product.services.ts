import { IProduct } from "@/types/product.interface";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getProducts = async (): Promise<IProduct[]> => { 
  try {
    const response = await fetch(`${API_URL}/products`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`HTTP error, status: ${response.status}`);
    }

    const data: IProduct[] = await response.json();
    return data;
    
  } catch (error) {
    console.error("Error fetching products: ", error);
    return []; 
  }
};