import { SearchSection } from 'components/SearchSection'
import { UserCardList } from 'components/UserCardList'
import Head from 'next/head'

type TopUser = {
  id: string
  url: string
}

type HomeProps = {
  topUsers: TopUser[]
}

export default function HomeTemplate({ topUsers }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home - Devbook</title>
      </Head>
      <div className="flex flex-col gap-4 justify-center-center container mx-auto">
        <SearchSection />
        <UserCardList topUsers={topUsers} />
      </div>
    </>
  )
}
