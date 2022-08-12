import React from 'react'
import Image from "next/image"
import {
    BellICon,
    ChatIcon,
    ChevronDownICon,
    HomeIcon,
    UserGroupICon,
    ViewGridIcon
} from "@heroicons/react/solid"
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartICon
} from "@heroicons/react/outline"
function Header() {
  return (
    <div>
        <div className="flex items-center   ">

            <Image src="https://links.papareact.com/5me" width={40} height={40} layouts="fixed"/>
            <div className="flex ">
            <SearchIcon className="h-6"/>
                <input type="text" placeholder="Search facebook"/>
            </div>
        </div>
    </div>
  )
}

export default Header