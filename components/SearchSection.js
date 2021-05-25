import { SearchBar } from "./SearchBar"

export const SearchSection = () => {
  return (
    <div className='bg-background-paper flex justify-between pl-28 pr-96 pb-10 ' >
      <div className='flex flex-col justify-around'>
        <h1 className='text-white text-6xl w-96' >Stalk people on github!</h1>
        <SearchBar />
      </div>
      <img className='pb-4' src="octocat.png" alt="octocat" width='358' height='358' />
    </div>
  )
}