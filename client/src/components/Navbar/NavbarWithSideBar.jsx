import { Link } from 'react-router-dom'
import { useAppStore } from '../../../store'
import SideNav from '../SideNav/SideNav'

/**
 * This component renders a nav with a sidenav
 *
 * @returns {ReactNode} a react header element
 */
const NavbarWithSideBar = () => {
  const { username } = useAppStore((state) => ({
    username: state.username,
  }))

  return (
    <header className="bg-white fixed w-full top-0 shadow-md">
      <nav className="nav w-full">
        <div className="container w-full max-w-[100%] px-4 py-3 flex flex-col lg:flex-row md:items-center items-baseline justify-between">
          <Link to={'/'}>
            <h3 className="text-2xl font-bold inline-block p-1 border-4 border-black">
              ASMS
            </h3>
          </Link>
          <div className="nav-links flex gap-5">
            {username ? (
              <>
                <span className="font-bold text-sm">{username}</span>
                <Link to={'/logout'} className="font-bold text-sm">
                  Log out
                </Link>
              </>
            ) : (
              <>
                <Link to={'/register'} className="font-bold text-sm">
                  Register
                </Link>
                <Link to={'/login'} className="font-bold text-sm">
                  Log in
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
      <SideNav />
    </header>
  )
}

export default NavbarWithSideBar
