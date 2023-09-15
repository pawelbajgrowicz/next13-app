import React from 'react';
import Product from "@/components/product/product";

const Page = () => {
  const products: Product[] = [1, 2, 3, 4]
    .map((index: number) => ({
        image: {url: `https://picsum.photos/306/424?n=${index}`, alt: `Product alt ${index}`},
        name: `Product ${index}`,
        price: index * 100
    }))

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Product list</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8" data-testid={'products-list'}>
            {products.map((product) => <Product key={product.name} product={product} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
