import { Navbar } from "../components/Navbar";
import { SearchSection } from "../components/SearchSection";

export default function Home() {
  return (
    <div className='flex flex-col h-screen justify-between bg-gradient-to-b from-black to-black-light'>
      <Navbar />
      <SearchSection />
    </div>
  )
}
