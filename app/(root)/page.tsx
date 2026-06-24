import ProductList from "@/components/shared/product/ProductList";
import data from "../data/products";

export default function HomePage() {
  return (
    <>
      <ProductList data={data.products} title="Products" limit={6}/>
    </>
  );
}
