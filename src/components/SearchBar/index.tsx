import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

type SearchBarProps = {
  rounded?: boolean;
  hidden?: boolean;
}


export const SearchBar = ({ rounded, hidden }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  const handleSearch = event => {
    if (searchTerm && (event.type === 'click' || event.key === 'Enter')) {
      router.push(`/search?query=${searchTerm}`)
    }
  }

  return (
    <div className={`bg-purple-light ${rounded ? 'rounded-md md:rounded-full lg:w-1/3' : 'rounded-md '} ${hidden && 'hidden md:flex'} flex h-14 order-last md:order-none col-span-2 focus-within:border-2 focus-within:border-primary`}>
      <input
        className={`${rounded && 'rounded-full'} flex-1 bg-purple-light placeholder-gray-dark px-4 text-md text-gray-dark focus:outline-none`}
        type='text'
        placeholder='Search'
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleSearch}
      />
      <button
        onClick={handleSearch}
        className={` p-1 flex-grow-0 ${rounded ? 'rounded-md md:rounded-full' : 'rounded-r-md'}  focus:outline-none transition duration-300 ease-in-out hover:bg-primary`}
      >
        <div className='px-2 py-2 w-11 h-full flex justify-center'>
          <Image
            src='/search-icon.svg'
            alt='search'
            width='25'
            height='25'
          />
        </div>
      </button>

    </div>
  )
}