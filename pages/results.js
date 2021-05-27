import { UserCard } from "../components/UserCard";

export default function Results() {
  return (
    <div className='flex flex-col mx-16 my-16 gap-8' >
      <h1 className='text-white font-bold text-4xl'>Results for Linus Torvalds</h1>
      <div className="grid grid-cols-4 justify-items-center gap-4 p-8 rounded-md bg-background-paper">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />

      </div>
    </div>
  )
}