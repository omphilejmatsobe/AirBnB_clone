
import Breadcrumb from "../breadcrumb";
import { source } from "../icons";

import Cardscontainer from "./cardscontainer";
import Filterbutton from "./filter/filterbutton";

export default async function Products() {

    return (
      <section className=" py-8 antialiased dark:bg-gray-900 md:py-12">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          {/*<!-- Heading & Filters -->*/}
          <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
            <div>
              <Breadcrumb/>
              <h2 className="mt-3 text-xl font-semibold text-gray-900  sm:text-2xl">Electronics</h2>
            </div>
            <div className="flex items-center space-x-4">

              <Filterbutton typeOf="Filter" icon={source.filter}/>
              
              <Filterbutton typeOf="Sort" icon={source.sort}/>
            </div>
          </div>

          {/* Products */}
          <Cardscontainer/>
      
          <div className="w-full text-center">
            <button type="button" className="rounded-lg cursor-pointer border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Show more</button>
          </div>
      
        </div>
      </section>
    )
  }