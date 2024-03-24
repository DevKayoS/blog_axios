import { blogFetch } from "../axios/config"
import {FormEvent, useState} from "react"
import { useNavigate } from "react-router-dom"

export function NewPost(){
const navigate = useNavigate()

const [title, setTitle] = useState("")
const [body, setBody] = useState("")

const createPost = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  const post = {title, body, userId: 1} 

  await blogFetch.post("/posts", {
    body: post
  })
  navigate("/")
}


  return(
    <div className=" flex flex-col max-w-[600px] m-auto shadow-lg shadow-black  p-4 rounded-lg space-y-5 bg-slate-950/50 text-slate-50" >
      <h2 className="font-semibold text-4xl">Inserir novo post:</h2>
      <form className="space-y-4" onSubmit={(e) => createPost(e)}>
        <div className="flex gap-2 items-center">
          <label htmlFor="title">Título:</label>
          <input 
            className="outline-none bg-slate-950/70 rounded-lg px-3 py-2 text-2xl shadow-lg shadow-black "
            type="text" 
            name="title" 
            id="title" 
            placeholder="Digite o título"
            onChange={(e) => setTitle(e.target.value)} 
          />
          </div>
          <div className="flex flex-col space-y-3">
            <label htmlFor="title">Conteúdo:</label>
            <textarea
            className="outline-none bg-slate-950/70 rounded-lg px-3 py-2 h-64 text-2xl shadow-lg shadow-black "
              name="body" 
              id="body" 
              placeholder="Digite o conteúdo" 
              onChange={(e) => setBody(e.target.value)} 
            />
          </div>
          <input type="submit" value="Criar Post"  className="hover:bg-slate-50 items-center hover:text-black border  rounded-full  p-2  flex w-36 mb-2"/>
      </form>
    </div>
  )
}