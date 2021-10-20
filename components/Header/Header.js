import Image from 'next/image';
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';

function Header() {
  return (
    <header className='shadow-sm border-b bg-white sticky top-0 z-50'>
      <div className='flex justify-between bg-white max-w-6xl lg:mx-auto'>
        {/* Left */}
        <div className='relative hidden w-24 lg:inline-grid cursor-pointer'>
          <Image
            src='https://links.papareact.com/ocw'
            layout='fill'
            objectFit='contain'
          />
        </div>

        <div className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'>
          <Image
            src='https://links.papareact.com/jjm'
            layout='fill'
            objectFit='contain'
          />
        </div>

        {/* Middle */}
        <div className='mt-1 relative p-3 rounded-md'>
          <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
            <SearchIcon className='h-5 text-gray-400' />
          </div>
          <input
            type='text'
            placeholder='Search'
            className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black'
          />
        </div>

        {/* Right */}
        <div className='flex items-center justify-end space-x-4'>
          <HomeIcon className='navBtn' />
          <MenuIcon className='h-6 md:hidden cursor-pointer' />

          <div className='relative navBtn'>
            <PaperAirplaneIcon className='navBtn rotate-45' />
            <div className='absolute -top-2 -right-1 text-xs h-5 w-5 bg-red-500 text-white rounded-full flex items-center justify-center'>
              3
            </div>
          </div>
          <PlusCircleIcon className='navBtn' />
          <UserGroupIcon className='navBtn' />
          <HeartIcon className='navBtn' />

          <img
            src='https://links.papareact.com/3ke'
            alt='Profile Pic'
            className='h-10 rounded-full cursor-pointer'
          />
        </div>
      </div>
    </header>
  );
}

export { Header };
