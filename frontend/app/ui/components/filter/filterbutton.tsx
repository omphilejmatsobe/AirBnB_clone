"use client"

import { MouseEventHandler, useState } from "react"
import { Icon, source } from "../../icons"



type FilterButton =
{
    typeOf: string
    icon: source

}

export default function Filterbutton({typeOf, icon}: FilterButton) {

    const [popUp, setPopUp] = useState(false)
  return (
    <div>
        <button data-modal-toggle="filterModal" data-modal-target="filterModal" type="button" className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto">
            <Icon w={16} h={16} icon={icon} name="Filter Icon" className="-ms-0.5 me-2 "/>
            {typeOf}
            <Icon w={16} h={16} icon={source.dropdown} name="Filter Icon" className="-me-0.5 ms-2 "/>
        </button>

     </div>
  )
}
