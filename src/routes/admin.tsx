import { blogFetch } from "../axios/config"
import { useState, useEffect, Key, ReactNode } from "react"

import { Link } from "react-router-dom"

type PostProps ={
  id: Key | null | undefined
  body: ReactNode
  title: ReactNode
}

export function Admin() {
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
    <div >
      <h1 className="flex items-center justify-center mb-4 font-bold text-slate-50/80 text-5xl">Gerenciar Posts</h1>

      {post.length === 0 ? (<p className="flex items-center m-auto ">Carregando...</p>) : (
      post.map((post: PostProps) =>
         <div key={post.id} className="shadow-lg shadow-black max-w-[700px] m-auto mb-10 p-4 rounded-lg space-y-5 bg-slate-950/50">
          <h2 className="text-slate-50/70 font-semibold">{post.title}</h2>
            <div className="flex gap-10">
              <Link className="bg-slate-50 hover:bg-slate-50/60  items-center rounded-lg text-2xl p-2  flex w-32 mb-2">Editar Post</Link>
              <button className="bg-red-500/60 hover:bg-red-800/60 items-center rounded-lg text-2xl p-2  flex  mb-2 shadow-md shadow-black">Excluir</button>
            </div>
         </div>
        )
      )}
    </div>
  )
}