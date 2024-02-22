import { Link } from 'react-router-dom'
import { useAppStore } from '../../../store'

const Navbar = () => {
  const { username } = useAppStore((state) => ({
    username: state.username,
    setUsername: state.setUsername,
  }))
  console.log(username)

  return (
    <header className="bg-white relative h-full top-0 shadow-md">
      <nav className="nav">
        <div className="container w-full max-w-[100%] px-4 py-3 flex flex-col lg:flex-row items-baseline justify-between">
          <Link to={'/'}>
            <h3 className="text-2xl font-bold inline-block p-1 border-4 border-black">
              ASMS
            </h3>
          </Link>
          <div className="nav-links flex gap-5">
            {username ? (
              <>
                <span className="font-bold">{username}</span>
                <Link to={'/logout'} className="font-bold">
                  Log out
                </Link>
              </>
            ) : (
              <>
                <Link to={'/register'} className="font-bold">
                  Register
                </Link>
                <Link to={'/login'} className="font-bold">
                  Log in
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
