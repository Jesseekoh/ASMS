import { useQuery } from '@tanstack/react-query'
import { fetchDashboardDetails } from '../helper'

/**
 * This component represents the dashboard page.
 * @returns {ReactNode} a dashboard page
 */
const Dashboard = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
  const { data, isLoading, isError } = useQuery({
    queryKey: ['dashboard-info'],
    queryFn: fetchDashboardDetails,
  })

  if (isLoading) {
    return (
      <div>
        <p>Loading data</p>
      </div>
    )
  }

  if (isError) {
    return (
      <div>
        <p>Error getting data</p>
      </div>
    )
  }
  console.log(data)
  const { first_name, email, last_name, gender, major, level } = data
  return (
    <>
      <section className="dashboard mt-12 bg-white p-4 rounded">
        <h2 className="text-3xl font-bold pb-10">Dashboard</h2>
        <div className="dashboard-contents container w-full rounded grid grid-cols-3">
          <div className="dashboard-info col-span-2">
            {isLoading && <p>is loading</p>}
            {data && (
              <>
                <div className="row grid grid-cols-2 gap-6 items-center mb-5">
                  <label className="font-semibold">Name:</label>
                  <p className="font-bold">
                    {first_name} {last_name}
                  </p>
                </div>
                <div className="row grid grid-cols-2 gap-6 items-center mb-5">
                  <label className="font-semibold">Gender:</label>
                  <p className="font-bold">{gender}</p>
                </div>
                <div className="row grid grid-cols-2 gap-6 items-center mb-5">
                  <label className="font-semibold">Program of Study:</label>
                  <p className="font-bold">{major}</p>
                </div>
                <div className="row grid grid-cols-2 gap-6 items-center mb-5">
                  <label className="font-semibold">Current Level:</label>
                  <p className="font-bold">{level}</p>
                </div>
                <div className="row grid grid-cols-2 gap-6 items-center mb-5">
                  <label className="font-semibold">Email:</label>
                  <p className="font-bold">{email}</p>
                </div>
              </>
            )}
          </div>
          <img
            className="col-span-1 "
            width={200}
            src={API_BASE_URL + '/profileImage'}
            alt=""
          />
        </div>
      </section>
    </>
  )
}

export default Dashboard
