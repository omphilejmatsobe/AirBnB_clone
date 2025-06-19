'use server'

import Product from "./cards/product";
import { getProducts } from "@/app/lib/products";
import { ProductDetails } from "@/app/lib/types";

export default async function Cardscontainer({}) {

  const productsData:ProductDetails[] = await getProducts()

  return (
    <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
      {
        productsData.map((product, idx)=>
        (
            <Product
                key={`${product.name} ${idx}`}
                name={product.name}
                numberOfRatings={product.numberOfRatings}
                rating={product.rating}
                price={product.price}
                salePrice={product.salePrice}
                imgUrl={product.imgUrl}/>
        ))
      }
    </div>
  )
}