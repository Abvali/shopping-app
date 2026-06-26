import { notFound } from "next/navigation";
import { Badge } from "lucide-react";
import { Button } from "@/components/ui/button";

import { getProductBySlug } from "@/lib/actions/product.actions";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

async function ProductPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;

  const product = await getProductBySlug(slug);
  console.log(product);

  if (!product) notFound();
  return (
    <>
      <section>
        <div className="grid grid-cols-5">
          <div className="col-span-2">
            <Image
              src={product.image}
              alt={product.name}
              className="min-h-75 object-cover object-center"
              width={1000}
              height={1000}
            />
          </div>
          <div className="col-span-2 p-5">
            <div className="flex flex-col gap-6">
              <p>
                {product.brand} {product.category}
              </p>
              <h1 className="font-bold text-2xl">{product.name}</h1>
              <div className="flex flex-col gap-3">
                <p>{product.price} $</p>
              </div>
              <div className="mt-10">
                <p className="font-semibold">Product Beschreiben:</p>
                <p>{product.description}</p>
              </div>
            </div>
          </div>

          <div>
            <Card>
              <CardContent className="p-4 ">
                <div className="mb-2 flex justify-between">
                  <div>Preis</div>
                  <div>{product.price} $</div>
                </div>
                <div className="mb-2 flex justify-between">
                  <div>Vefügbarkeit</div>
                  {product.price > 0 ? (
                    <Badge fontVariant="outline">Vefügbar</Badge>
                  ) : (
                    <Badge fontVariant="destructive">Nict Vefügbar</Badge>
                  )}
                </div>
                {product.stock > 0 && (
                  <div className="flex items-center">
                    <Button className="w-full">Add to Card</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductPage;
