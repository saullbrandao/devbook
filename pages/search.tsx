import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { UserCard } from "../components/UserCard";
import { searchApi } from "../services/api";

type User = {
  id: number
  url: string
}

export default function Search() {
  const router = useRouter()
  const term = router.query.query

  const [users, setUsers] = useState<User[]>()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const loadingCards = () => {
    let cards = []
    for (let i = 0; i < 8; i++) {
      cards.push(<UserCard key={i} />)
    }

    return cards
  }

  useEffect(() => {
    const searchUsers = async (term) => {
      setIsError(false)
      setIsLoading(true)

      try {
        const response = await searchApi.get(`users?q=${term}&per_page=8`)
        if (response.status === 200) {
          const searchedUsers = []
          response.data.items.map(item => {
            searchedUsers.push({ url: item.url, id: item.id })
          })
          setUsers(searchedUsers)
          setIsLoading(false)
        }
      } catch (error) {
        setIsError(true)
      }

    }
    term && searchUsers(term)
  }, [term])

  return (
    <div className='container mx-auto flex flex-col items-center lg:items-stretch my-8 md:my-16 gap-8' >
      <h1 className='dark:text-white font-bold text-4xl'>Results for {term}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4 p-8 self-stretch rounded-md bg-secondary dark:bg-background-paper">
        {isError && <h1 className='dark:text-red-600 text-xl col-span-full' >Something went wrong...</h1>}
        {isLoading
          ? loadingCards()
          : users?.map((user => <UserCard key={user.id} user_url={user.url} />))
        }

      </div>
    </div>
  )
}