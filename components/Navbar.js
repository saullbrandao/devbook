import { SearchBar } from "./SearchBar"


export const Navbar = () => {
  return (
    <div className='grid grid-cols-3 items-center py-4 mx-16'>
      <img className='' src="logo.svg" alt="devbook" />
      <SearchBar rounded={true} />
      {/* <div className='invisible' /> */}
    </div>
  )
}