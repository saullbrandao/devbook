import { SearchSection } from "../components/SearchSection";
import { UserCardList } from "../components/UserCardList";
import { searchApi } from '../services/api'

export default function Home({ topUsers }) {
  return (
    <div className='flex flex-col h-full gap-8 container mx-auto'>
      <SearchSection />
      <UserCardList topUsers={topUsers} />
    </div>
  )
}

export const getStaticProps = async () => {
  const { data } = await searchApi.get('users?q=followers:%3E25000&per_page=10')

  const topUsers = data.items.map(user => {
    return {
      id: user.id,
      url: user.url
    }
  })

  return {
    props: {
      topUsers
    },
    revalidate: 60 * 60 * 24
  }
}