import Image from "next/image";
import {
  MagnifyingGlassIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

import { HomeIcon, QueueListIcon } from "@heroicons/react/16/solid";


function Header() {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between mx-5 xl:mx-auto max-w-6xl">
          {/* Left - instagram logo */}
          <div className="relative hidden lg:inline-grid w-24 h-12 cursor-pointer">
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png" 
              layout="fill"
              alt="Instagram Logo" 
              objectFit="contain"
            />        
          </div>
          <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
            <Image
              src="https://cdn.icon-icons.com/icons2/2715/PNG/512/instagram_logo_icon_172387.png"
              layout="fill"
              alt="Instagram Logo"
              objectFit="contain"
            />
          </div>
          {/* Middle - search */}
          <div className="max-w-xs">
            <div className="relative mt-1 p-3 rounded-md">
              <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-500"/>
              </div>
              <input className="p-2 border border-1 bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black" type="text" placeholder="search..." />
            </div>
          </div>
          {/* right - icons */}
          <div className="flex items-center justify-end space-x-4">
            <HomeIcon className="navBtn"/>
            <QueueListIcon className="w-6 h-6 md:hidden cursor-pointer" />
            <div className="navBtn relative">
              <PaperAirplaneIcon className="navBtn -rotate-45"/>
              <div className="absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">3</div>
            </div>
            <PlusCircleIcon className="navBtn"/>
            <UserGroupIcon className="navBtn"/>
            <HeartIcon className="navBtn"/>
            <img src="https://images.vexels.com/media/users/3/147101/isolated/preview/b4a49d4b864c74bb73de63f080ad7930-instagram-profile-button.png" alt="profile pic" className="h-10 rounded-full w-10 cursor-pointer"/>
          </div>
      </div>
    </div>
  )
}

export default Header