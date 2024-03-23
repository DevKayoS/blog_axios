import { Outlet } from "react-router-dom"
import { NavBar } from "./components/navBar"

export function App() {
  return (
    <div className="text-3xl">
      <NavBar/>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}


