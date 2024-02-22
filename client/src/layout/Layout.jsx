import { Outlet } from 'react-router-dom'
import NavbarWithSideBar from '../components/Navbar/NavbarWithSideBar'

const Layout = () => {
  return (
    <>
      <NavbarWithSideBar />
      <main className="pl-52 mr-10">
        <Outlet />
      </main>
    </>
  )
}

export default Layout
