import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { UserCard } from "../components/UserCard";
import { searchApi } from "../services/api";

export default function Search() {
  const router = useRouter()
  const term = router.query.query

  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])

  useEffect(() => {
    const searchUsers = async (term) => {
      try {
        const response = await searchApi.get(`users?q=${term}&per_page=8`)
        if (response.status === 200) {
          const searchedUsers = []
          response.data.items.map(item => {
            searchedUsers.push({ url: item.url, id: item.id })
          })
          setUsers(searchedUsers)
          setLoading(false)
        }
      } catch (error) {
        console.log(error)
      }
    }
    term && searchUsers(term)
  }, [term])

  return (
    <div className='container mx-auto flex flex-col my-16 gap-8' >
      <h1 className='dark:text-white font-bold text-4xl'>Results for {term}</h1>
      <div className="grid grid-cols-4 justify-items-center gap-4 p-8 rounded-md bg-secondary dark:bg-background-paper">
        {users?.map((user => {
          return (loading ?
            <UserCard key={user.id} />
            :
            <UserCard key={user.id} user_url={user.url} />
          )
        }))}
      </div>
    </div>
  )
}