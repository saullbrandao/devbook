import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'

import { useEffect, useState } from 'react'

export const UserCard = ({ user_url }) => {
  const [userInfo, setUserInfo] = useState()

  useEffect(async () => {
    try {
      const response = await axios.get(user_url)
      if (response.status === 200) {
        setUserInfo(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }, [user_url])


  return (
    <Link href={`/users/${userInfo?.login}`}>
      <div className="w-56 2xl:ml-8 h-80 p-2 rounded-md bg-background-paper cursor-pointer ">
        <div className="bg-gray-light rounded-md h-52 w-52">
          {userInfo?.avatar_url &&
            <Image src={userInfo.avatar_url} width='300' height='300' />
          }
        </div>
        <div className="flex justify-between my-2">
          <h3 className='text-sm font-medium text-gray-200'>{userInfo?.name}</h3>
          <h3 className='text-sm font-medium text-gray-200'>@{userInfo?.login}</h3>
        </div>
        <p className='text-xs my-2 line-clamp-4'>{userInfo?.bio ? userInfo.bio : 'No bio'}</p>
      </div>
    </Link>
  )
}