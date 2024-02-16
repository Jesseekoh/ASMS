import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <div className="grid place-items-center w">
        <h2>404 Not Found</h2>
        <Link to={'/'}>Back To Home</Link>
      </div>
    </>
  )
}

export default ErrorPage
