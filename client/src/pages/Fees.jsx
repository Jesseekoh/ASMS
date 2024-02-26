import { useQuery } from '@tanstack/react-query'

/**
 * This component renders the fees page.
 * @returns {ReactNode} a fees page
 */
const Fees = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['results'],
    queryFn: async () => {
      const response = await fetch('https://www.for-ward.tech/asms' + '/fees', {
        credentials: 'include',
      })
      return response.json()
    },
  })

  if (isLoading) {
    return (
      <section className="dashboard mt-12 bg-white p-4 rounded">
        <h2 className="text-3xl font-bold pb-10">Fees</h2>
        <p>Loading...</p>
      </section>
    )
  }
  if (isError) {
    return (
      <section className="dashboard mt-12 bg-white p-4 rounded">
        <h2 className="text-3xl font-bold pb-10">Fees</h2>
        <p>Error fetching payments</p>
      </section>
    )
  }
  console.log(data)
  return (
    <section className="dashboard mt-12 bg-white p-4 rounded">
      <h2 className="text-3xl font-bold pb-10">Fees</h2>
      <div className="fees-content">
        {data.fees ? (
          data.fees.map((fee) => (
            <div key={fee.name}>
              <h3 className="font-bold">{fee.name}</h3>
              <h3>{fee.amount}</h3>
            </div>
          ))
        ) : (
          <p>No history of payment</p>
        )}
      </div>
    </section>
  )
}

export default Fees
