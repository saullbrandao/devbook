import { UserCard } from 'components/UserCard'
import Carousel from 'react-elastic-carousel'

type TopUser = {
  id: string
  url: string
}

type UserCardListProps = {
  topUsers: TopUser[]
}

export const UserCardList = ({ topUsers }: UserCardListProps) => {
  return (
    <div className="bg-secondary dark:bg-background-paper-dark flex flex-col justify-between dark:text-white rounded-md mb-8 py-4">
      <h2 className="text-4xl font-semibold mb-8 self-center">Top users</h2>
      <Carousel
        showArrows={false}
        isRTL={false}
        enableAutoPlay={true}
        autoPlaySpeed={4000}
        breakPoints={[
          {
            width: 1,
            itemsToShow: 1,
          },
          {
            width: 500,
            itemsToShow: 2,
          },
          {
            width: 700,
            itemsToShow: 3,
          },
          {
            width: 1000,
            itemsToShow: 4,
          },
          {
            width: 1300,
            itemsToShow: 5,
          },
        ]}
      >
        {topUsers?.map(user => (
          <UserCard key={user.id} user_url={user.url} />
        ))}
      </Carousel>
    </div>
  )
}
