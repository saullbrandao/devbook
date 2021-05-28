import { SearchBar } from "./SearchBar"
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className='grid grid-cols-3 items-center py-4 mx-16'>
      <Link href='/'>
        <a>
          <img className='' src="logo.svg" alt="devbook" />
        </a>
      </Link>
      <SearchBar rounded={true} />
    </div>
  )
}