export function NewPost(){
  return(
    <div className=" flex flex-col max-w-[600px] m-auto shadow-lg shadow-black  p-4 rounded-lg space-y-5 bg-slate-950/50 text-slate-50" >
      <h2 className="font-semibold text-4xl">Inserir novo post:</h2>
      <form className="space-y-4">
        <div className="flex gap-2 items-center">
          <label htmlFor="title">Título:</label>
          <input 
            className="outline-none bg-slate-950/70 rounded-lg px-3 py-2 text-2xl shadow-lg shadow-black "
            type="text" 
            name="title" 
            id="title" 
            placeholder="Digite o título" 
          />
          </div>
          <div className="flex flex-col space-y-3">
            <label htmlFor="title">Conteúdo:</label>
            <textarea
            className="outline-none bg-slate-950/70 rounded-lg px-3 py-2 h-64 text-2xl shadow-lg shadow-black "
              name="body" 
              id="body" 
              placeholder="Digite o conteúdo" 
            />
          </div>
          <input type="button" value="Criar Post"  className="hover:bg-slate-50 items-center hover:text-black border  rounded-full  p-2  flex w-36 mb-2"/>
      </form>
    </div>
  )
}