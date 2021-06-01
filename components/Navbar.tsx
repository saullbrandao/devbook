import { SearchBar } from "./SearchBar"
import Link from 'next/link'
import Image from "next/image"
import { ThemeToggle } from "./ThemeToggle"

export const Navbar = () => {
  return (
    <div className='container mx-auto flex justify-between items-center py-4 mb-8'>
      <Link href='/'>
        <a>
          <Image className='' src="/logo.svg" alt="devbook" width='270' height='75' />
        </a>
      </Link>
      <SearchBar rounded={true} />
      <ThemeToggle />
    </div>
  )
}