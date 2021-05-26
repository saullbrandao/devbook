import Image from 'next/image'

export const UserCard = () => {
  return (
    <div className="w-52 2xl:w-72 rounded-md bg-background-paper p-2">
      <Image className=' bg-gray-light rounded-md w-full' src='https://avatars.githubusercontent.com/u/1024025?v=4' width='300' height='300' />
      <div className="flex justify-between my-2">
        <h3 className='text-sm font-medium text-gray-200'>Linus Torvalds</h3>
        <h3 className='text-sm font-medium text-gray-200'>@torvalds</h3>
      </div>
      <p className='text-xs my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quis. dfweff fwenf wkenf wkfw</p>
    </div>
  )
}