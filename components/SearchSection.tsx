import Image from "next/image"
import { SearchBar } from "./SearchBar"

export const SearchSection = () => {
  return (
    <div className='bg-secondary dark:bg-background-paper flex justify-between rounded-md p-2 mt-4 md:my-8 md:px-16' >
      <div className='flex flex-col justify-evenly max-w-md'>
        <h1 className='dark:text-white text-4xl sm:text-5xl md:text-6xl' >Stalk people on github!</h1>
        <SearchBar hidden={true} />
      </div>
      <Image src="/octocat.png" alt="octocat" width='300' height='300' />
    </div>
  )
}