import Image from "next/image";
import Link from "next/link";
import { IProductCardProps } from "@/types/productcardprops.interface";

const ProductCard = ({ card }: IProductCardProps) => {
  return (
    <Link href={`/products/${card.id}`} className="block w-full cursor-pointer hover:scale-105 transition-transform duration-300">
      <div className="flex flex-col w-full">
        <div className="relative w-full h-64 mb-4 flex items-center justify-center">
          <Image
            src={card.image}
            alt={card.name}
            fill
            className="object-contain"
          />
        </div>
        <div className="w-full flex justify-evenly items-start px-2">
          <div className="flex flex-col text-left">
            <h2 className="text-xl font-medium text-[#3A352F]">{card.name}</h2>
            <p className="text-sm text-[#7A7061] mt-1">{card.description}</p>
          </div>
          <div className="text-lg font-semibold text-[#3A352F]">  
            {card.price}U$
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;