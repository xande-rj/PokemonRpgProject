import { Link, Outlet } from 'react-router'
import './App.css'
import Tabledata from "./Table/tabledata"
import Navbar from './navbar/navbar'

function App() {

  return (
    <>
      <div className='menu'>
        <Navbar />
       <Outlet />
      </div>
      <div>
        <Link to='/'>
          <img src='https://www.freeiconspng.com/uploads/pokeball-pokemon-ball-png-images-4.png' className="logo react" alt="poke logo" />
        </Link>
      </div>
      <h1>Berries</h1>
      <Tabledata />
    </>
  )
}

export default App
