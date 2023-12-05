import { Link } from "react-router-dom" 
 
 export function Navbar() {
  return (
    <nav className="bg-zinc-700 mb-3 flex justify-between py-5 px-10 rounded-lg">
        <h1 className="text-2xl font-bold"> 
            <Link to="/samples">Creative Commons tool</Link>
        </h1>
        <ul className="flex gap-x-2">
            <li>
                <Link to="/new-sample">New-Sample</Link>
            </li>
            <li>
                Welcome @Username
            </li>
            <li>
                <Link to="/login" >Login</Link>
            </li>
            <li>
                <Link to="/register" >Register</Link>        
            </li>
        </ul>
    </nav>
  )
}
