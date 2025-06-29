import RatingBar from '@/app/ui/components/rating/rating'
import React from 'react'

export default function page() {
    const numberOfRatings = 1234
    const ratingCount:number[] = [176, 79, 0, 21, 957]

    /* Weighted Average */

    const weightedAve  = (numList:number[]) =>
    {
        let sumDivisor = 0
        let sumNumerator = 0
        for (let idx = 5; idx > 0; idx--)
        {
            sumNumerator  += (numList[idx - 1] * idx)
            sumDivisor += numList[idx - 1]
        }
            
        return (sumNumerator / sumDivisor)
    }

    const rating = Math.floor(weightedAve(ratingCount))

  return (
    <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                <div className="shrink-0 max-w-md lg:max-w-lg mx-auto ">
                    <img className="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="" />
                    <img className="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="" />
                </div>

                <div className="mt-6 sm:mt-8 lg:mt-0 flex flex-col items-center justify-center gap-8">
                    <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                        Apple iMac 24" All-In-One Computer, Apple M1, 8GB RAM, 256GB SSD,
                        Mac OS, Pink
                    </h1>
                    <div className="w-full mt-4 sm:items-center sm:gap-4 sm:flex">
                        <p
                        className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white"
                        >
                        $1,249.99
                        </p>

                        <div className="flex flex-row items-center justify-center gap-2 mt-2 sm:mt-0 bg-red">
                            <div className="flex items-center gap-1">
                                <div className={` flex items-center gap-2 ${rating > 0 ? "block" : "hidden" }`}>
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
                            </div>
                            <p
                                className="text-sm font-medium leading-none text-gray-500 "
                            >
                                {rating+".0"}
                            </p>
                            <a
                                href="#"
                                className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline"
                            >
                                {numberOfRatings}
                            </a>
                        </div>
                    </div>

                    <div className="w-full mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                        <a
                        href="#"
                        title=""
                        className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100  "
                        role="button"
                        >
                        <svg
                            className="w-5 h-5 -ms-2 me-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                            />
                        </svg>
                        Add to favorites
                        </a>

                        <a
                        href="#"
                        title=""
                        className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                        role="button"
                        >
                        <svg
                            className="w-5 h-5 -ms-2 me-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                            />
                        </svg>

                        Add to cart
                        </a>
                    </div>

                    <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                    <p className="mb-6 text-gray-500 dark:text-gray-400">
                        Studio quality three mic array for crystal clear calls and voice
                        recordings. Six-speaker sound system for a remarkably robust and
                        high-quality audio experience. Up to 256GB of ultrafast SSD storage.
                    </p>

                    {/* Ratings & Reviews*/}
                    <section className='w-full flex flex-col border-1 rounded-2xl border-gray-200 h-fit p-6 gap-5'>
                        <h2 className='text-2xl font-medium'>Product Details</h2>
                        <div className='w-full '>
 
                        </div>

                    </section>

                    {/* Ratings & Reviews*/}
                    <section className='w-full flex flex-col border-1 rounded-2xl border-gray-200 h-fit p-6 gap-5'>
                        <h2 className='text-2xl font-medium'>Ratings & Reviews</h2>
                        <div className='w-full lg:max-w-sm'>
                            <div className='box flex flex-col gap-y-2 w-full '>
                                {
                                    ratingCount.map((rate, idx)=>
                                    (
                                       <RatingBar totalRatings={1234} count={ratingCount[4 - idx]} rating={5 - idx}/> 
                                    ))
                                }
                            </div>
                        </div>

                    </section>
                                            
                </div>
            </div>
        </div>
    </section>
  )
}
