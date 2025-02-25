import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { HiPlus, HiCheck } from "react-icons/hi";
import IProduct from "@/types/IProduct";

function Product({ id, name, category, price, image }: IProduct): JSX.Element {
  return (
    <div className="drop-shadow-[0 1px 1px rgb(0 0 0 / 0.05)] flex flex-col gap-3 rounded-xl bg-white">
      <div className="flex min-h-[266px] items-center justify-center rounded-t-xl bg-[#FAFAFA] px-6">
        <Image
          src={image}
          alt={`Image of a ${name}`}
          width={218}
          height={255}
          style={{maxHeight: '255px', maxWidth: '218px', transition: 'ease-in-out'}}
        />
      </div>
      <div className="flex flex-col gap-9 px-5 pb-4">
        <div>
          <small className="text-base font-light text-[#8D8D8D]">
            {category}
          </small>
          <h3 className="pb-2 text-xl font-medium text-sapphire">{name}</h3>
          <div className="flex gap-1">
            <FaStar className="text-[#F6B76F]" />
            <FaStar className="text-[#F6B76F]" />
            <FaStar className="text-[#F6B76F]" />
            <FaStar className="text-[#F6B76F]" />
            <FaStar className="text-[#F6B76F]" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold text-sapphire">R${price}</p>
          <button className="group/icon flex h-12 w-12 items-center justify-center rounded-full bg-sapphire">
            <HiPlus className="h-6 w-6 text-white group-hover/icon:hidden transition-opacity" />
            <HiCheck className="h-6 w-6 text-white hidden group-hover/icon:flex transition-opacity"/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
