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
                salePrice: 2399,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `George & Mason - Brae Ceramic Stackable Bowls - 4 Pack`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 2399,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `Dove Men+Care Advanced Care Energising Face, Hand and Body Cream 400ml`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 2399,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `Beko 60cm S/ Steel Buit-In Oven BBIE12300X`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 2399,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `BEKO 15Place Dishwasher A+++with Save water BDW200`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 2399,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `Dove Rich Care Moisturizing Body Cream 400ml`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 2399,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },

            /* More For Testing */

            {
                name: `Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 2399,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `George & Mason - Brae Ceramic Stackable Bowls - 4 Pack`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 2399,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `Dove Men+Care Advanced Care Energising Face, Hand and Body Cream 400ml`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 2399,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `Beko 60cm S/ Steel Buit-In Oven BBIE12300X`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 2399,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `BEKO 15Place Dishwasher A+++with Save water BDW200`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 2399,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `Dove Rich Care Moisturizing Body Cream 400ml`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 2399,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 2399,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `George & Mason - Brae Ceramic Stackable Bowls - 4 Pack`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 2399,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `Dove Men+Care Advanced Care Energising Face, Hand and Body Cream 400ml`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 2399,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `Beko 60cm S/ Steel Buit-In Oven BBIE12300X`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 2399,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `BEKO 15Place Dishwasher A+++with Save water BDW200`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 2399,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `Dove Rich Care Moisturizing Body Cream 400ml`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 2399,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 2399,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `George & Mason - Brae Ceramic Stackable Bowls - 4 Pack`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 2399,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `Dove Men+Care Advanced Care Energising Face, Hand and Body Cream 400ml`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 2399,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `Beko 60cm S/ Steel Buit-In Oven BBIE12300X`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 2399,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `BEKO 15Place Dishwasher A+++with Save water BDW200`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 2399,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `Dove Rich Care Moisturizing Body Cream 400ml`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 2399,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 2399,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `George & Mason - Brae Ceramic Stackable Bowls - 4 Pack`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 2399,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `Dove Men+Care Advanced Care Energising Face, Hand and Body Cream 400ml`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 2399,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `Beko 60cm S/ Steel Buit-In Oven BBIE12300X`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 2399,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `BEKO 15Place Dishwasher A+++with Save water BDW200`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 2399,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `Dove Rich Care Moisturizing Body Cream 400ml`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 2399,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 2399,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `George & Mason - Brae Ceramic Stackable Bowls - 4 Pack`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 2399,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `Dove Men+Care Advanced Care Energising Face, Hand and Body Cream 400ml`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 2399,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `Beko 60cm S/ Steel Buit-In Oven BBIE12300X`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 2399,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `BEKO 15Place Dishwasher A+++with Save water BDW200`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 2399,
                imgUrl: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            },
            {
                name: `Dove Rich Care Moisturizing Body Cream 400ml`,
                numberOfRatings: 257,
                rating: 4,
                price: 1699,
                salePrice: 2399,
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