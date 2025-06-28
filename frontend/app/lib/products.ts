'use server'

import { ProductDetails } from "./types"

export async function getProducts ()
{
    try
    {
        const ProductList:ProductDetails[] = [
            {
                name: `Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 1000,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `George & Mason - Brae Ceramic Stackable Bowls - 4 Pack`,
                numberOfRatings: 257,
                rating: 4,
                price: 2399,
                salePrice: 1699,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `Dove Men+Care Advanced Care Hand and Body Cream 400ml`,
                numberOfRatings: 257,
                rating: 4,
                price: 1850,
                salePrice: 1850,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `Beko 60cm S/ Steel Buit-In Oven BBIE12300X`,
                numberOfRatings: 257,
                rating: 4,
                price: 200,
                salePrice: 170,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `Beko 60cm S/ Steel Buit-In Oven BBIE12300X`,
                numberOfRatings: 257,
                rating: 4,
                price: 200,
                salePrice: 170,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 1000,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `Dove Men+Care Advanced Care Hand and Body Cream 400ml`,
                numberOfRatings: 257,
                rating: 4,
                price: 1850,
                salePrice: 1850,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `George & Mason - Brae Ceramic Stackable Bowls - 4 Pack`,
                numberOfRatings: 257,
                rating: 4,
                price: 2399,
                salePrice: 1699,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
        ]

        return ProductList
    }

    catch (error)
    {
        console.error("error")
        throw new Error("Failed to fetch product list.")
    }
}