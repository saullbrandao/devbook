import { SearchBar } from "./SearchBar"


export const Navbar = () => {
  return (
    <div className='flex ml-10 items-center h-28'>
      <img className='mr-36' src="logo.svg" alt="devbook" />
      <SearchBar rounded={true} />
    </div>
  )
}