import Slider from "react-slick"
import { UserCard } from "./UserCard"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { searchApi } from "../services/api";

const fetchTopUsers = async () => {
  try {
    const response = await searchApi.get('users?q=followers:%3E25000&per_page=10')
    return response
  } catch (error) {
    console.log(error)
  }
}

export const UserCardList = () => {
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 5,
    swipeToSlide: true,
  };

  const [topUsers, setTopUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(async () => {
    const response = await fetchTopUsers()
    if (response.status === 200) {
      const users = []
      response.data.items.map(item => {
        users.push({ url: item.url, id: item.id })
      })
      setTopUsers(users)
      setLoading(false)
    }
  }, [])

  return (
    <div className='bg-background-paper-dark flex flex-col justify-between text-white rounded-md mb-8 p-8'>
      <h1 className='text-4xl font-semibold mb-8'>Top users</h1>

      <Slider {...settings}>
        {topUsers?.map((user => {
          return (loading ?
            <UserCard key={user.id} />
            :
            <UserCard key={user.id} user_url={user.url} />
          )
        }))}

      </Slider>

    </div >
  )
}