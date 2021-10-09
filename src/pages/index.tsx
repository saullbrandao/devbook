import { GetStaticProps } from 'next'
import { searchApi } from 'services/api'
import HomeTemplate from 'templates/HomeTemplate'

type TopUser = {
  id: string
  url: string
}

type HomeProps = {
  topUsers: TopUser[]
}

export default function Home({ topUsers }: HomeProps) {
  return <HomeTemplate topUsers={topUsers} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await searchApi.get('users?q=followers:%3E25000&per_page=10')

  const topUsers = data.items.map(user => {
    return {
      id: user.id,
      url: user.url,
    }
  })

  return {
    props: {
      topUsers,
    },
    revalidate: 60 * 60 * 24,
  }
}
