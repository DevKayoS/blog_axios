import { FormEvent, useState, useEffect } from "react"
import { blogFetch } from "../axios/config"
import { useNavigate, useParams } from "react-router-dom"

export function AttPost(){
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const {id} = useParams()

  const editPost = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  
    const post = {title, body, userId: 1} 
  
    await blogFetch.put(`/posts/${id}`, {
      body: post
    })
    navigate("/")
  }

  const getPost = async () => {
    try {
      const response = await blogFetch.get(`/posts/${id}`)

      const data = response.data

      setTitle(data.title),
      setBody(data.body)
    } catch (error) {
      console.log(error)
    }
  }



  useEffect(()=>{
    getPost()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return(
    <div className=" flex flex-col max-w-[600px] m-auto shadow-lg shadow-black  p-4 rounded-lg space-y-5 bg-slate-950/50 text-slate-50" >
      <h2 className="font-semibold text-4xl">Editando: <span className="text-3xl text-slate-50/60"> {title} </span></h2>
      <form className="space-y-4" onSubmit={(e) => editPost(e)}>
        <div className="flex gap-2 items-center">
          <label htmlFor="title">Título:</label>
          <input 
            className="outline-none bg-slate-950/70 rounded-lg px-3 py-2 text-2xl shadow-lg shadow-black "
            type="text" 
            name="title" 
            id="title"
            value={title || ""}
            placeholder="Digite o título"
            onChange={(e) => setTitle(e.target.value)} 
          />
          </div>
          <div className="flex flex-col space-y-3">
            <label htmlFor="title">Conteúdo:</label>
            <textarea
            className="outline-none text-slate-50/60 bg-slate-950/70 rounded-lg px-3 py-2 h-64 text-2xl shadow-lg shadow-black "
              name="body" 
              id="body"
              value={body || ""}
              placeholder="Digite o conteúdo" 
              onChange={(e) => setBody(e.target.value)} 
            />
          </div>
          <input type="submit" value="Editar Post"  className="cursor-pointer hover:bg-slate-50 items-center hover:text-black border text-2xl rounded-full  py-2 px-2 justify-center  flex w-36 mb-2"/>
      </form>
    </div>
  )
}