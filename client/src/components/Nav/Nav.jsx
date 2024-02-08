import { NavLink } from 'react-router-dom'
import './Nav.css'
import reactLogo from '../../assets/react.svg'
const Nav = ({ userName }) => {
  return (
    <nav className="nav relative w-full z-10 bg-amber-400">
      <div className="nav--container wrapper flex justify-between items-center py-2 px-2">
        <NavLink to={'/'}>
          <span className="nav--logo border-4 border-black border-solid inline-block p-1 font-bold text-2xl">
            ASMS
          </span>
        </NavLink>
        <div className="nav--links flex gap-5">
          {userName ? (
            <>
              <img src={reactLogo} alt="" width={20} />
              <p>{userName}</p>
              <NavLink to={'/'}>Log out</NavLink>
            </>
          ) : (
            <>
              <NavLink to={'/login'}>
                <span className="inline-block text-sm font-bold">Log in</span>
              </NavLink>
              <NavLink to={'/signup'}>
                <span className="inline-block text-sm font-bold">Sign up</span>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Nav
