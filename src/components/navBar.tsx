import {Link} from "react-router-dom"

export function NavBar(){
  return(
    <nav className="flex justify-between p-5  text-slate-50">
      <h2>
        <Link to={'/'}
          className="text-4xl font-semibold"
        > Blog</Link>
      </h2>
      <ul className="flex gap-5">
        <li>
          <Link to={'/'}
            className="text-slate-50/60 p-2 text-2xl  hover:text-slate-50"
          >Home</Link>
        </li>
        <li>
          <Link to={'/new'}
            className="border p-2 rounded-full text-2xl hover:bg-slate-50 hover:text-black"
          >Novo Post</Link>
        </li>
      </ul>
      
    </nav>

  )
}