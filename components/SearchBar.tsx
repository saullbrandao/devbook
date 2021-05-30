import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

type SearchBarProps = {
  rounded?: boolean
}


export const SearchBar = ({ rounded }: SearchBarProps) => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = event => {
    if (searchTerm && event.type === 'click' || event.key === 'Enter') {
      router.push(`/search?query=${searchTerm}`)
    }
  }

  return (
    <div className={`bg-purple-light ${rounded ? 'rounded-full border-primary border-4' : 'rounded-md '} flex justify-between h-14`}>
      <input
        className="rounded-full flex-1 bg-purple-light placeholder-gray-dark pl-4 text-md text-gray-dark focus:outline-none"
        type='text'
        placeholder='Search'
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleSearch}
      />
      <button
        className={`bg-primary flex-grow-0 ${rounded ? 'rounded-full' : 'rounded-r-md'}  focus:outline-none`}
        onClick={handleSearch}
      >
        <div className='px-2 py-2 w-11 flex justify-center'>
          <Image src='/search-icon.svg' alt='search' width='25' height='25' />
        </div>
      </button>

    </div>
  )
}