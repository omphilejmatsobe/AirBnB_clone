type RatingBar =
{
    totalRatings: number,
    rating: number,
    count: number
}

export default function RatingBar({totalRatings, rating, count }: RatingBar) {
    const widthValue = Math.floor(( count / totalRatings) * 100)
  return (
    <div className="flex items-center w-full">
        <p className="font-medium text-base text-black mr-0.5">{rating}</p>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_12042_8589)">
                <path
                    d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                    fill="#FBBF24" />
            </g>
        </svg>  
        <div className="h-2 w-full flex items-center justify-start  max-w-sm rounded-3xl bg-gray-200 ml-5 mr-3">
            <span className={`h-full rounded-3xl bg-amber-400`}
                style={{width: `${widthValue}%`}}
            ></span>
        </div>
        <div className="   w-16">
           <h3 className="font-medium text-base  text-black mr-0.5">{count}</h3> 
        </div>
        
    </div>
  )
}
