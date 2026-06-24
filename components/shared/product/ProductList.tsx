import { Product } from "@/types";
import ProductCard from "./ProductCard";

type Props = {
  data: Product[];
  title?: string;
  limit?: number;
};

export default function ProductList({ data, title, limit }: Props) {
  const limitedData = limit ? data.slice(0, limit) : data;
  return (
    <div className="my-10">
      <h2 className="font-bold text-2xl mb-4">{title}</h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-4 gap-4">
          {limitedData.map((item: Product) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      ) : (
        <div>
          <p>keine Produkte gefunden!</p>
        </div>
      )}
    </div>
  );
}
