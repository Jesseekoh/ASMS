import { useQuery } from '@tanstack/react-query'
import { fetchDashboardDetails } from '../helper'

const Biodata = () => {
  // const queryClient = useQueryClient()
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

  const { first_name, email, last_name, gender, major, level } = data
  return (
    <section className="dashboard mt-12 bg-white p-4 rounded">
      <h3 className="text-3xl font-bold">Biodata</h3>
      <div className="student-info">
        <h4>Personal details</h4>
        {isError && (
          <p>
            An error has occurred could not fetch details: {isError.message}
          </p>
        )}

        {isLoading && <p>Loading...</p>}

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
      </div>
    </section>
  )
}

export default Biodata
