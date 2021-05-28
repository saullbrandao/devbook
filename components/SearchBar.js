import { useRouter } from 'next/router'
import { useState } from 'react'

export const SearchBar = ({ rounded }) => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className={`bg-purple-light ${rounded ? 'rounded-full border-primary border-4' : 'rounded-md '} flex justify-between h-14`}>
      <input
        className="rounded-full flex-1 bg-purple-light placeholder-gray-dark pl-4 text-md text-gray-dark focus:outline-none"
        type='text'
        placeholder='Search'
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className={`bg-primary flex-grow-0 ${rounded ? 'rounded-full' : 'rounded-r-md'}  focus:outline-none`}
        onClick={() => searchTerm && router.push(`/search?query=${searchTerm || ''}`)}
      >
        <img className=' px-3 w-11 ' src='search.svg' alt='search' />
      </button>

    </div>
  )
}