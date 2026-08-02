import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] =  [
   { id: 1,
    name: "Silver",
    description: "Acabado rediseñado",
    price: 399,
    stock: 100,
    image: "https://ourahealth.imgix.net/lineItem/or5-silver.png?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=384&s=5a85ac458e3f11746291f69bb449cc50", 
    categoryId: 1
  },
  {
    id: 2,
    name: "Gold",
    description: "Acabado clásico",
    price: 499,
    stock: 50,
    image: "https://ourahealth.imgix.net/lineItem/or5-gold.png?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=384&s=1e15f4d95277ce956de8884577efbcf0", 
    categoryId: 1
  },
  {
    id: 3,
    name: "Deep Rose",
    description: "Nuevo Acabado",
    price: 499,
    stock: 50,
    image: "https://ourahealth.imgix.net/lineItem/or5-deep-rose.png?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=384&s=ff7f8618e3f32c211837b052fe92c6e7", 
    categoryId: 1
  },
  {
    id: 4,
    name: "Gold",
    description: "",
    price: 279,
    stock: 50,
    image: "https://ourahealth.imgix.net/lineItem/or4-gold.png?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=384&s=94de14e8afad764d2eb1acbc6eacf6b7", 
    categoryId: 2
  },
    {
    id: 5,
    name: "Silver",
    description: "Acabado clasico",
    price: 244,
    stock: 50,
    image: "https://ourahealth.imgix.net/lineItem/or4-silver.png?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=384&s=142728338900fd74382745d5be975cde", 
    categoryId: 2
  },
  {
    id: 6,
    name: "Stealth",
    description: "",
    price: 244,
    stock: 50,
    image: "https://ourahealth.imgix.net/lineItem/or4-stealth.png?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=384&s=03aa3054278538314e3be0bbc0303e0f", 
    categoryId: 2
  },
    {
    id: 7,
    name: "MidNight",
    description: "Ceramic",
    price: 279,
    stock: 50,
    image: "https://ourahealth.imgix.net/jade-pop/midnight-front-view.png?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=384&s=524e35c829357fbb05a8b1460a8ee079", 
    categoryId: 3
  },
    {
    id: 8,
    name: "Cloud",
    description: "Ceramic",
    price: 279,
    stock: 50,
    image: "https://ourahealth.imgix.net/jade-pop/cloud-front-view.png?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=384&s=1a8e2be63f4c7c9608ccfe9af4f71b38", 
    categoryId: 3
  }
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
