const SearchBar = () => {
  return (
    <div className='border-primary bg-secondary border-4 rounded-full flex justify-around h-14 ml-36'>
      <input className="rounded-full bg-secondary placeholder-gray-dark pl-4 text-2xl text-gray-dark focus:outline-none" type='text' placeholder='Search' />
      <button className='bg-primary rounded-full p-1 focus:outline-none focus:rin ' ><img className='m-1' src='search.svg' /></button>
    </div>
  )
}

export const Navbar = () => {
  return (
    <div className='flex ml-10 items-center h-28'>
      <img src="logo.svg" alt="devbook" />
      <SearchBar />
    </div>
  )
}