import { useQuery } from '@tanstack/react-query'
import { fetchResults } from '../helper'

/**
 * This component represents the results page.
 * @returns {ReactNode} a results page
 */
const Results = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['results'],
    queryFn: fetchResults,
  })

  if (data) console.log(data)
  return (
    <section className="dashboard mt-12 bg-white p-4 rounded">
      <h2 className="text-3xl font-bold pb-10">Results</h2>
      {/* {Array.isArray(data) && (data.map(result => ()))} */}
    </section>
  )
}

export default Results
