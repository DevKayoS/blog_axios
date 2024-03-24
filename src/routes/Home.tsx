import {useState, useEffect, ReactNode, Key} from "react"
import {Link} from "react-router-dom"
import { blogFetch } from "../axios/config"


export function Home(){

  
type PostProps ={
  id: Key | null | undefined
  body: ReactNode
  title: ReactNode
}

  const [post, setPost] = useState([])

  const getPost = async() => {
    try {
      const response = await blogFetch.get("/posts")

      const data = response.data

      setPost(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getPost()

  }, [])

  return(
    <div className="mt-20 flex flex-col ">
      <h1 className="flex items-center justify-center mb-4 font-bold text-slate-50 text-5xl">Últimos Posts</h1>
      {post.length === 0 ? (<p className="flex items-center m-auto ">Carregando...</p>) : (
      <ul className="space-y-7 max-w-[900px] flex flex-col items-center justify-center m-auto">
      {post.map((post: PostProps) =>
          <li key={post.id} className="shadow-lg shadow-black h-80 p-4 rounded-lg space-y-5 bg-slate-950/50">
          <h1 className="text-slate-50 font-semibold">{post.title}</h1>
          <p >{post.body}</p>
          <Link to={`/posts/${post.id}`}
          className="hover:bg-slate-50 border justify-center items-center rounded-full  p-2  flex w-32 mb-2"
          >Ler mais</Link>
        </li>
        )}
      </ul>)}
      
    </div>
  )
}