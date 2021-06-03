import Slider from "react-slick"
import { UserCard } from "./UserCard"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type TopUser = {
  id: string;
  url: string;
}

type UserCardListProps = {
  topUsers: TopUser[]
}

export const UserCardList = ({ topUsers }: UserCardListProps) => {
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 5,
    swipeToSlide: true,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  return (
    <div className='bg-secondary dark:bg-background-paper-dark flex flex-col justify-between dark:text-white rounded-md mb-8 p-8'>
      <h1 className='text-4xl font-semibold mb-8'>Top users</h1>
      <Slider {...settings}>
        {topUsers?.map((user => <UserCard key={user.id} user_url={user.url} />))}
      </Slider>
    </div >
  )
}