
import { ProductDetails } from "@/app/lib/types";
import Image from "next/image";

export default function Product({name, numberOfRatings, rating, price, salePrice, imgUrl}:ProductDetails) {

  const sale = Math.floor((1 - (price/salePrice)) * 100)
  

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="h-56 w-full">
        <a href="#">
          <Image height={500} width={500} className="mx-auto h-full" src={imgUrl} alt="" />
        </a>
      </div>
      <div className="pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className={`me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 bg-blue-500 text-white ${sale > 0 ? "block" : "hidden"}`}>{`${sale}% off `}</span>

          <div className="flex items-center justify-end gap-1 ml-auto">

            <button type="button" data-tooltip-target="tooltip-add-to-favorites" className="cursor-pointer rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
              <span className="sr-only"> Add to Favorites </span>
              <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
              </svg>
            </button>
            <div id="tooltip-add-to-favorites" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 " data-popper-placement="top">
              Add to favorites
              <div className="tooltip-arrow" data-popper-arrow=""></div>
            </div>
          </div>
        </div>

        <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">{name}</a>

        <div className={`mt-2 flex items-center gap-2 ${rating > 0 ? "block" : "hidden" }`}>
          <div className="flex items-center">
            {
              Array(5).fill(1).map((star, idx) =>
              (
                <svg key={`Star-${idx}`} className={`h-4 w-4 ${idx < rating ? "text-yellow-400" : "text-gray-300 "}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                </svg> 
              )
              )
            }
          </div>

          <p className="text-sm font-medium text-gray-900 ">{rating}</p>
          <p className="text-sm font-medium text-gray-500">({numberOfRatings})</p>
        </div>

          <div className="flex items-center my-2">
            <svg className="h-4 w-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
            </svg>
            <p className="text-sm font-medium text-gray-500 ">Fast Delivery</p>
          </div>

          <div className="mt-4 flex flex-row gap-x-2 items-center h-fit">
            <h2 className="text-2xl font-extrabold text-gray-900 ">{`$${Intl.NumberFormat().format(price)}`}</h2>
            <h2 className={`text-base font-medium  text-gray-400 line-through ${sale > 0 ? "block" : "hidden"}`}>{`$${Intl.NumberFormat().format(salePrice)}`}</h2>
          </div>
      </div>
    </div>
  )
}
