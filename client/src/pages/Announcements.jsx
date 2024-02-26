import { useQuery } from '@tanstack/react-query'

/**
 * This component represents the announcements page.
 * @returns {ReactNode} an announcements page
 */
const Announcements = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['announcements'],
    queryFn: async () => {
      const response = await fetch(
        'https://www.for-ward.tech/asms' + '/announcement',
        {
          credentials: 'include',
        }
      )
      return response.json()
    },
  })
  if (isLoading) {
    return (
      <section className="announcements mt-12 bg-white p-4 rounded">
        <h2 className="text-3xl font-bold pb-10">Announcements</h2>

        <div className="announcements-container">Loading...</div>

        <div className="announcements-container container"></div>
      </section>
    )
  }

  if (isError) {
    return (
      <section className="announcements mt-12 bg-white p-4 rounded">
        <h2 className="text-3xl font-bold pb-10">Announcements</h2>

        <div className="announcements-container">
          Error loading Announcements
        </div>
      </section>
    )
  }
  if (data) {
    console.log(data)
  }
  return (
    <section className="announcements mt-12 bg-white p-4 rounded">
      <h2 className="text-3xl font-bold pb-10">Announcements</h2>

      <div className="announcements-container">
        {data.length > 0 ? (
          data.map((post) => (
            <div key={post.from}>
              <h3 className="font-bold">{post.date}</h3>
              <p className="">{post.info}</p>
            </div>
          ))
        ) : (
          <p>There are no announcements at the moment</p>
        )}
      </div>

      <div className="announcements-container container"></div>
    </section>
  )
}

export default Announcements
