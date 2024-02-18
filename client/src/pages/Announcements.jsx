import { useQuery } from '@tanstack/react-query'

// import {u}
const Announcements = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: 'announcements',
    queryFn: () => {},
  })
  return (
    <section className="announcements mt-12 bg-white p-4 rounded">
      <h2 className="">Announcements</h2>

      <div className="announcements-container"></div>

      <div className="announcements-container container"></div>
    </section>
  )
}

export default Announcements
