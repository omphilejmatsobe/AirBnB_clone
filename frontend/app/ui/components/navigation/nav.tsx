import Link from "next/link";
import { Icon, source } from "../../icons";

export default function Nav() {
  return (
 
      <header className={`w-full fixed top-0 flex flexz-10 bg-none m-0`}>
        <nav className={`flex flex-col items-center justify-center  w-full h-fit bg-[#ffda09] gap-5 py-5`}>
          <div className="w-full flex justify-between px-5 lg:px-24">
            {/* Logo */}
            <div className="w-full flex items-center ">
              <Link href={`/`}>
              <h3>
              {
                `LOGO`
              }
              </h3>
              </Link>
            </div>

            {/* Search */}

            <form className="min-w-md w-md mx-auto hidden lg:block">   
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
              <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                  </div>
                  <input type="search" id="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 " placeholder="Search Mockups, Logos..." required />
                  <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 cursor-pointer">Search</button>
                </div>
            </form>

            {/* Nav-Links */}
            <div className="w-full flex items-center justify-end">
              <ul className="gap-4 lg:gap-10 flex flex-row items-center justify-between">
                <li>
                  <Link href={`/`}>Login</Link>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <Link href={`/`} className="flex flex-row gap-2 items-center">
                    <Icon h={28} w={28} className="" name="cart" icon={source.cart}/>
                    <h3 className="hidden lg:block">Cart</h3>
                    
                  </Link>
                </li>
                <li className="block lg:hidden">Burger</li>
              </ul>
            </div>

          </div>

          <div className="w-full flex lg:hidden items-center px-5 lg:px-24">
            {/* Search */}

            <form className="min-w-md w-md mx-auto hidden lg:block">   
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
              <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                  </div>
                  <input type="search" id="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 " placeholder="Search Mockups, Logos..." required />
                  <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 cursor-pointer">Search</button>
                </div>
            </form>

          </div>
        </nav>
      </header>
  )
}
