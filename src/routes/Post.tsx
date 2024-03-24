import { blogFetch } from "../axios/config"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

interface Post {
  title: string;
  body: string;
}




export function Post() {
  const {id} = useParams()
  const [post, setPost] = useState<Post | null>(null)


  const getPost = async () => {
    try {
      const response = await blogFetch.get(`/posts/${id}`)

      const data: Post = response.data

      setPost(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=> {
   getPost() 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  

  return (
    <div className="space-y-7 max-w-[900px] flex flex-col items-center justify-center m-auto">
      {!post ? (
        <p className="text-slate-50/60">Carregando...</p>
      ): (
        <div className="shadow-lg shadow-black h-80 p-4 rounded-lg space-y-5 bg-slate-950/50">
          <h2 className="text-slate-50 font-semibold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  )
}