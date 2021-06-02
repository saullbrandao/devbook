import axios from "axios"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { usersApi } from "../../services/api"

const sortTopRepos = (repos: any[]) => {
  return repos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 2)
}

export default function User() {
  const router = useRouter()
  const { slug } = router.query

  const [name, setName] = useState('')
  const [topRepos, setTopRepos] = useState([])

  useEffect(() => {
    const fetchUserData = async (slug) => {
      try {
        const response = await usersApi.get(`/${slug}`)
        setName(response.data.name)
      } catch (error) {
        console.log(error)
      }
    }

    const fetchRepos = async (slug) => {
      try {
        const response = await usersApi.get(`/${slug}/repos`, {
          params: {
            sort: 'updated',
            direction: 'desc',
            per_page: 100
          }
        })
        const sortedRepos = sortTopRepos(response.data)
        setTopRepos(sortedRepos)
      } catch (error) {
        console.log(error)
      }
    }

    if (slug) {
      fetchUserData(slug)
      fetchRepos(slug)
    }
  }, [slug])

  return (
    <section className='dark:text-white flex flex-col container mx-auto gap-4 my-8'>
      <h1 className="font-bold text-4xl">{name}</h1>
      <div>
        <h2 className='text-2xl mb-3'>▼ Github Stats</h2>
        <div className='bg-secondary dark:bg-background-paper h-68 flex justify-evenly py-4'>
          <Image
            src={`https://github-readme-stats.vercel.app/api?username=${slug}&show_icons=true&bg_color=151515&title_color=ffffff&text_color=9E9E9E&icon_color=67D47F`}
            width='618'
            height='241'
          />
          <Image
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${slug}&layout=compact&bg_color=151515&title_color=ffffff&text_color=9E9E9E`}
            width='418'
            height='210'
          />
        </div>
      </div>
      <div>
        <h2 className='text-2xl mb-3'>▼ Repos</h2>
        <div className='bg-secondary dark:bg-background-paper h-48 flex justify-around py-4'>
          {topRepos?.map((repo, i) => {
            return (
              < Image
                key={i}
                src={`https://github-readme-stats.vercel.app/api/pin/?username=${slug}&repo=${repo.name}&bg_color=151515&title_color=ffffff&text_color=9E9E9E`}
                width='500'
                height='149'
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}