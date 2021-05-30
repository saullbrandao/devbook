import Slider from "react-slick"
import { UserCard } from "./UserCard"
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const UserCardList = ({ topUsers }) => {
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 5,
    swipeToSlide: true,
  };

  return (
    <div className='bg-background-paper-dark flex flex-col justify-between text-white rounded-md mb-8 p-8'>
      <h1 className='text-4xl font-semibold mb-8'>Top users</h1>

      <Slider {...settings}>
        {topUsers?.map((user => <UserCard key={user.id} user_url={user.url} />))}
      </Slider>
    </div >
  )
}