import { Navbar } from "../components/Navbar";
import { SearchSection } from "../components/SearchSection";
import { UserCardList } from "../components/UserCardList";

export default function Home() {
  return (
    <div className='flex flex-col h-full gap-8 bg-gradient-to-b from-black to-black-light'>
      <Navbar />
      <SearchSection />
      <UserCardList />
    </div>
  )
}
