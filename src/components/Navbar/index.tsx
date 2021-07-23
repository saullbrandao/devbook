import Image from "next/image"
import Link from 'next/link'
import { SearchBar } from "components/SearchBar"
import { ThemeToggle } from "components/ThemeToggle"

export const Navbar = () => {
  return (
    <div className='container mx-auto grid grid-cols-2 md:flex justify-between items-center md:py-4 md:mb-8'>
      <Link href='/'>
        <a>
          <Image src="/logo.svg" alt="devbook" width='270' height='75' />
        </a>
      </Link>
      <SearchBar rounded />
      <ThemeToggle />
    </div>
  )
}