import { UserCard } from "./UserCard"

export const UserCardList = () => {
  return (
    <div className='bg-background-paper-dark flex flex-col justify-between text-white rounded-md mb-8 mx-16 p-8'>
      <h1 className='text-4xl font-semibold mb-8'>Top users</h1>

      <div className='flex justify-between'>
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />

      </div>
    </div >
  )
}