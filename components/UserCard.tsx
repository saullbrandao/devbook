import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type UserInfo = {
  avatar: string;
  login: string;
  name: string;
  bio: string;
}

type UserCardProps = {
  user_url: string
}
export const UserCard = ({ user_url }: UserCardProps) => {
  const [userInfo, setUserInfo] = useState<UserInfo | undefined>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await axios.get(user_url)
      if (response.status === 200) {
        const userData = {
          avatar: response.data.avatar_url,
          login: response.data.login,
          name: response.data.name,
          bio: response.data.bio,
        }

        setUserInfo(userData)
        setLoading(false)
      }
    }
    try {
      user_url && fetchUserData()
    } catch (error) {
      console.log(error)
    }
  }, [user_url])


  return (
    <Link href={`/users/${userInfo?.login}`}>
      <div className="w-56 2xl:ml-8 h-80 p-2 rounded-md bg-background-paper cursor-pointer ">
        <div className="bg-secondary dark:bg-gray-light rounded-md h-52 w-52">
          {userInfo?.avatar &&
            <Image src={userInfo.avatar} width='300' height='300' />
          }
        </div>
        <div className="flex justify-between my-2">
          <h3 className='text-sm font-medium '>{userInfo?.name}</h3>
          <h3 className='text-sm font-medium '>@{userInfo?.login}</h3>
        </div>
        <p className='text-xs my-2 line-clamp-4'>{userInfo?.bio}</p>
      </div>
    </Link>
  )
}