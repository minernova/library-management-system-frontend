import Books from './pages/Books'
import Home from './pages/Home'
import Header from './components/Header'
import Profile from './pages/Profile'
import { Outlet } from 'react-router-dom'
function App() {

  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App
