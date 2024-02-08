import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav/Nav'
import { fetchData } from '../helper'
import { useLoaderData } from 'react-router-dom'
import SideNav from '../components/SideNav/SideNav'
import { useContext } from 'react'
import userDetailsContext from '../contexts/userDetailsContext'

export const layoutLoader = () => {
  const userName = fetchData('userName')
  // console.log(userName)
  return { userName }
}

const Layout = () => {
  // const { userName } = useLoaderData()
  const userDetails = useContext(userDetailsContext)
  const username = userDetails.username
  return (
    <>
      <Nav userName={userDetails.username} />
      {username && <SideNav />}
      <div className="ml-[300px]">
        <Outlet />
      </div>
    </>
  )
}

export default Layout
