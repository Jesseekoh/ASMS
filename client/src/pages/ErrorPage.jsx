import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

/**
 * This component renders the error page
 * @returns {ReactNode} a error page page
 */
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
