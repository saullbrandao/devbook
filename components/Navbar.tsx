import { SearchBar } from "./SearchBar"
import Link from 'next/link'
import Image from "next/image"

export const Navbar = () => {
  return (
    <div className='container mx-auto grid grid-cols-3 items-center py-4 mb-8'>
      <Link href='/'>
        <a>
          <Image className='' src="/logo.svg" alt="devbook" width='270' height='75' />
        </a>
      </Link>
      <SearchBar rounded={true} />
      <div />
    </div>
  )
}