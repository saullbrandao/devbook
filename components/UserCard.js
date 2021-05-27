import Image from 'next/image'

export const UserCard = () => {
  return (
    <div className="w-56 2xl:ml-8 h-80 p-2 rounded-md bg-background-paper ">
      <Image className=' bg-gray-light rounded-md ' src='https://avatars.githubusercontent.com/u/1024025?v=4' width='300' height='300' />
      <div className="flex justify-between my-2">
        <h3 className='text-sm font-medium text-gray-200'>Linus Torvalds</h3>
        <h3 className='text-sm font-medium text-gray-200'>@torvalds</h3>
      </div>
      <p className='text-xs my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quis. dfweff fwenf wkenf wkfw</p>
    </div>
  )
}