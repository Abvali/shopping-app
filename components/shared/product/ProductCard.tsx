import { Card, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }: { product: any }) {
  return (
    <>
      <Card className="w-full max-w-sm">
        <CardHeader className="p-0 items-center">
          <Link href={`/product/${product.slug}`}>
            <Image
              src={product.image}
              alt={product.name}
              height={300}
              width={300}
              priority={true}
            />
            <p>{product.name}</p>
            <p>{product.price}</p>
          </Link>
        </CardHeader>
      </Card>
    </>
  );
}
