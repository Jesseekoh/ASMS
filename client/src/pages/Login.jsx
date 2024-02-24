import LoginForm from '../components/LoginForm'
import Navbar from '../components/Navbar/Navbar'

/**
 * This component represents the log in page.
 * @returns {ReactNode} a log in page
 */
const Login = () => {
  return (
    <>
      <Navbar />
      <div className="h-full grid place-items-center">
        <LoginForm />
      </div>
    </>
  )
}

export default Login
