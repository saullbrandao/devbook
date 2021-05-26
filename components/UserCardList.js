import Slider from "react-slick"
import { UserCard } from "./UserCard"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const UserCardList = () => {
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 5,
    swipeToSlide: true,
    // arrows: false,
  };

  return (
    <div className='bg-background-paper-dark flex flex-col justify-between text-white rounded-md mb-8 mx-16 p-8'>
      <h1 className='text-4xl font-semibold mb-8'>Top users</h1>

      <Slider {...settings}>
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </Slider>

    </div >
  )
}