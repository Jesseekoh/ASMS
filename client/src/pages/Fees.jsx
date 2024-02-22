import { useQuery } from '@tanstack/react-query'
const Fees = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['results'],
    queryFn: async () => {
      const response = await fetch('http://localhost:5000/fees', {
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
        {data && data.fees.length > 0 ? (
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
