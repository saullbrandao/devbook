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
  user_url?: string
}
export const UserCard = ({ user_url }: UserCardProps) => {
  const [userInfo, setUserInfo] = useState<UserInfo | undefined>()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchUserData = async () => {
      setIsError(false)
      setIsLoading(true)
      try {
        const response = await axios.get(user_url)
        if (response.status === 200) {
          const userData = {
            avatar: response.data.avatar_url,
            login: response.data.login,
            name: response.data.name,
            bio: response.data.bio,
          }

          setUserInfo(userData)
          setIsLoading(false)
        }
      } catch (error) {
        setIsError(true)
      }
    }
    user_url && fetchUserData()
  }, [user_url])


  return (<>
    {isLoading
      ? <div className="w-56 2xl:ml-8 h-80 p-2 rounded-md bg-background-paper">
        <div className="bg-secondary dark:bg-gray-light rounded-md h-52 w-52 flex items-center justify-center">
          {isError && <p className='text-red-600'>Error Loading Data...</p>}
        </div>
        <div className="flex justify-between gap-2 my-2">
          <div className='bg-secondary dark:bg-gray-light h-4 w-3/5 rounded-md ' />
          <div className='bg-secondary dark:bg-gray-light h-4 w-2/5 rounded-md' />
        </div>
        <div className="flex flex-col gap-2">
          <div className='bg-secondary dark:bg-gray-light h-2 rounded-md ' />
          <div className='bg-secondary dark:bg-gray-light h-2 rounded-md ' />
          <div className='bg-secondary dark:bg-gray-light h-2 rounded-md ' />
          <div className='bg-secondary dark:bg-gray-light h-2 rounded-md ' />
        </div>
      </div>
      :
      <Link href={`/users/${userInfo?.login}`}>
        <div className="w-56 2xl:ml-8 h-80 p-2 rounded-md bg-background-paper dark:text-white hover:bg-primary cursor-pointer">
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
    }
  </>)
}