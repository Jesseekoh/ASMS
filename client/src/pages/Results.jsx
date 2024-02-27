import { useQuery } from '@tanstack/react-query'
import { fetchResults } from '../helper'
import { toast } from 'react-toastify'

/**
 * This component represents the results page.
 * @returns {ReactNode} a results page
 */
const Results = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['results'],
    queryFn: fetchResults,
  })
  if (isError) toast('Error fetching results')
  if (data) console.log(data)
  return (
    <section className="dashboard mt-12 bg-white p-4 rounded">
      <h2 className="text-3xl font-bold pb-10">Results</h2>
      <div>
        {isLoading && <p>Loading Results...</p>}
        {isError && <p>Error fetching results</p>}
        {data && (
          <>
            <div className="row grid grid-cols-2 gap-6 items-center mb-5">
              <h3 className="font-semibold">CGPA:</h3>
              <p className="font-bold">{data.cgpa}</p>
            </div>
            <div className="row grid grid-cols-2 gap-6 items-center mb-5">
              <h3 className="font-semibold">Total:</h3>
              <p className="font-bold">{data.grandtotal}</p>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Results
