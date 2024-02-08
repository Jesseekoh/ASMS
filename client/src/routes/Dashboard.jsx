import { useContext } from 'react'
import userDetailsContext from '../contexts/userDetailsContext'

// export async function dashboardLoader() {
//   const userName = fetchData('userName')

//   return { userName }
// }

const Dashboard = () => {
  const userDetails = useContext(userDetailsContext)
  // console.log(userDetails)
  console.log(userDetails.username)
  // const { userName } = useLoaderData()

  return (
    <div className="pt-12">
      <h1 className="text-2xl font-bold">{userDetails.fullName}</h1>
      {/* <Announcements announcements={announcements} /> */}
    </div>
  )
}

export default Dashboard
