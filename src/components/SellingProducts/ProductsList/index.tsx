import Product from "./Product";
import IProduct from "@/types/IProduct";
import products from "@/app/products.json";

interface ProductsListProps {
  category: keyof typeof products;
}

function ProductsList({ category }: ProductsListProps): JSX.Element {
  const productsData = products[category];
  return (
    <>
      {productsData.map((product: IProduct) => (
        <Product key={product.id} {...product} />
      ))}
    </>
  );
}

export default ProductsList;
