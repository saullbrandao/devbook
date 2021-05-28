import { SearchSection } from "../components/SearchSection";
import { UserCardList } from "../components/UserCardList";

export default function Home() {
  return (
    <div className='flex flex-col h-full gap-8 container mx-auto'>
      <SearchSection />
      <UserCardList />
    </div>
  )
}
