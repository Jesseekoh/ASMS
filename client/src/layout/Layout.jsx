import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SideNav from '../components/SideNav'
import { redirect } from 'react-router-dom'
import { useAppStore } from '../../store'
const Layout = () => {
  const { token, setToken } = useAppStore((state) => ({
    token: state.token,
    setToken: state.setToken,
  }))
  // if (!token) redirect('/login')
  return (
    <>
      <Navbar />
      <SideNav />
      <main className="pl-52 mr-10">
        <Outlet />
      </main>
    </>
  )
}

export default Layout
