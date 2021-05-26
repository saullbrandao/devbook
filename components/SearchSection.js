import Image from "next/image"
import { SearchBar } from "./SearchBar"

export const SearchSection = () => {
  return (
    <div className='bg-background-paper flex justify-between pl-24 pr-80 pb-5' >
      <div className='flex flex-col justify-evenly max-w-md'>
        <h1 className='text-white text-6xl' >Stalk people on github!</h1>
        <SearchBar />
      </div>
      <Image src="/octocat.png" alt="octocat" width='300' height='300' />
    </div>
  )
}