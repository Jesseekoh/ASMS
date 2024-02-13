// import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav/Nav'
import { fetchData } from '../helper'
// import { useLoaderData } from 'react-router-dom'
// import SideNav from '../components/SideNav/SideNav'
import { useContext } from 'react'
import userDetailsContext from '../contexts/userDetailsContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const layoutLoader = () => {
  const userName = fetchData('userName')
  // console.log(userName)
  return { userName }
}

const Layout = () => {
  const navigate = useNavigate()
  // const { userName } = useLoaderData()
  const { userDetails, setUserDetails } = useContext(userDetailsContext)
  console.log(userDetails)
  // const username = details.username
  useEffect(() => {
    if (!userDetails.isLoggedIn) {
      navigate('/login')
    }
  }, [])
  return (
    <>
      <Nav />
      {/* {username && <SideNav />}
      <div className="ml-[300px]">
        <Outlet />
      </div> */}
    </>
  )
}

export default Layout
