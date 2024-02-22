import LoginForm from '../components/LoginForm'
import Navbar from '../components/Navbar/Navbar'

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
