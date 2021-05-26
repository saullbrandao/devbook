export const SearchBar = ({ rounded }) => {
  return (
    <div className={`bg-purple-light ${rounded ? 'rounded-full border-primary border-4' : 'rounded-md '} flex justify-between h-14`}>
      <input className="rounded-full flex-1 bg-purple-light placeholder-gray-dark pl-4 text-md text-gray-dark focus:outline-none" type='text' placeholder='Search' />
      <button className={`bg-primary flex-grow-0 ${rounded ? 'rounded-full' : 'rounded-r-md'}  focus:outline-none`}><img className=' px-3 w-11 ' src='search.svg' alt='search' /></button>
    </div>
  )
}