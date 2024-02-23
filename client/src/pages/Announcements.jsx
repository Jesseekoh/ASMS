import { useQuery } from '@tanstack/react-query'

// import {u}
const Announcements = () => {
  const BASE_API_URL = import.meta.env.VITE_API_BASE_URL
  const { data, isLoading, isError } = useQuery({
    queryKey: ['announcements'],
    queryFn: async () => {
      const response = await fetch(BASE_API_URL + 'announcement', {
        credentials: 'include',
      })
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

        <div className="announcements-container container"></div>
      </section>
    )
  }
  if (data) {
    console.log(data.info)
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
