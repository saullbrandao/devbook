import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { usersApi } from "../../services/api"

const sortTopRepos = (repos) => {
  const sortedRepos = repos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 2)
  return sortedRepos.map(repo => repo.name)
}

export default function User() {
  const router = useRouter()
  const { slug } = router.query

  const [name, setName] = useState('')
  const [topRepos, setTopRepos] = useState<string[]>()
  const [isLoadingData, setIsLoadingData] = useState(false)
  const [isErrorData, setIsErrorData] = useState(false)
  const [isLoadingRepos, setIsLoadingRepos] = useState(false)
  const [isErrorRepos, setIsErrorRepos] = useState(false)

  useEffect(() => {
    const fetchUserData = async (slug) => {
      setIsErrorData(false)
      setIsLoadingData(true)
      try {
        const response = await usersApi.get(`/${slug}`)
        setName(response.data.name)
        setIsLoadingData(false)
      } catch (error) {
        setIsErrorData(true)
      }

    }

    const fetchRepos = async (slug) => {
      setIsErrorRepos(false)
      setIsLoadingRepos(true)
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
        setIsLoadingRepos(false)
      } catch (error) {
        setIsErrorRepos(true)
      }
    }

    if (slug) {
      fetchUserData(slug)
      fetchRepos(slug)
    }
  }, [slug])

  return (
    <section className='dark:text-white flex flex-col container items-center md:items-stretch  mx-auto gap-4 my-8'>
      <h1 className="font-bold text-4xl">{name}</h1>
      <section>
        <h2 className='text-2xl mb-3'>▼ Github Stats</h2>
        {isErrorData && <p className='text-red-600 text-lg my-2'>Something went wrong...</p>}
        {isLoadingData
          ? <p className='text-lg my-2'>Loading...</p>
          :
          <div className='md:bg-secondary md:dark:bg-background-paper flex flex-col md:flex-row md:justify-around md:gap-4 md:p-4 w-full'>
            <Image
              src={`https://github-readme-stats.vercel.app/api?username=${slug}&show_icons=true&bg_color=151515&title_color=ffffff&text_color=9E9E9E&icon_color=67D47F`}
              width='518'
              height='210'
            />
            <Image
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${slug}&layout=compact&bg_color=151515&title_color=ffffff&text_color=9E9E9E`}
              width='435'
              height='210'
            />
          </div>
        }
      </section>
      <section>
        <h2 className='text-2xl mb-3'>▼ Repos</h2>
        {isErrorRepos && <p className='text-red-600 text-lg my-2'>Something went wrong...</p>}
        {isLoadingRepos
          ? <p className='text-lg my-2'>Loading...</p>
          :
          <div className='md:bg-secondary md:dark:bg-background-paper flex flex-col md:flex-row md:justify-around gap-1 md:p-4'>
            {topRepos?.map((repo, i) => {
              return (
                <div key={i} className='self-center'>
                  < Image
                    src={`https://github-readme-stats.vercel.app/api/pin/?username=${slug}&repo=${repo}&bg_color=151515&title_color=ffffff&text_color=9E9E9E`}
                    width='435'
                    height='130'
                  />
                </div>
              )
            })}
          </div>
        }
      </section>
    </section>
  )
}
