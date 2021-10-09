import Image from 'next/image'
import { SearchBar } from 'components/SearchBar'

export const SearchSection = () => {
  return (
    <section className="bg-secondary dark:bg-background-paper flex justify-between rounded-md p-2 mt-4 md:my-8 md:px-16">
      <div className="flex flex-col justify-evenly max-w-md">
        <h1 className="dark:text-white text-4xl sm:text-5xl md:text-6xl">
          Find people on github!
        </h1>
        <SearchBar hidden />
      </div>
      <Image src="/octocat.png" alt="octocat" width="300" height="300" />
    </section>
  )
}
