import { useQuery } from '@tanstack/react-query'
import { DocumentPlusIcon } from '@heroicons/react/24/solid'

/**
 * This component represents the courses page.
 * @returns {ReactNode} a courses page
 */
const Courses = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      const response = await fetch('http://localhost:5000/courses', {
        credentials: 'include',
      })
      return response.json()
    },
  })

  if (isLoading) {
    return (
      <section className="courses mt-8 bg-white p-4 rounded">
        <h2 className="text-3xl font-bold mb-10">Registered Courses</h2>
        <div className="courses-content container overflow-x-auto">
          <h2>Loading...</h2>
        </div>
        <div className="flex mt-8">
          <button className="register-course ml-auto px-4 py-5 flex items-center gap-2 rounded-md bg-blue-400">
            Register a course
            <DocumentPlusIcon width={20} />
          </button>
        </div>
      </section>
    )
  }

  if (isError) {
    return (
      <section className="courses mt-8 bg-white p-4 rounded">
        <h2 className="text-3xl font-bold mb-10">Registered Courses</h2>
        <div className="courses-content container overflow-x-auto">
          <h2>Error loading courses</h2>
        </div>
        <div className="flex mt-8">
          <button className="register-course ml-auto px-4 py-5 flex items-center gap-2 rounded-md bg-blue-400">
            Register a course
            <DocumentPlusIcon width={20} />
          </button>
        </div>
      </section>
    )
  }
  return (
    <section className="courses mt-8 bg-white p-4 rounded">
      <h2 className="text-3xl font-bold mb-10">Registered Courses</h2>
      <div className="courses-content container overflow-x-auto">
        <table className="table-auto w-full items-center border-collapse">
          <thead>
            <tr>
              <th className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                #
              </th>
              <th className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                Course Name
              </th>
              <th className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                Course Code
              </th>
              <th className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                Unit
              </th>
              <th className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {data && data.length != 0 ? (
              data.map((course, index) => (
                <tr key={data.code}>
                  <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                    {index + 1}
                  </td>
                  <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                    {course.name}
                  </td>
                  <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                    {course.code}
                  </td>
                  <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                    {course.unit}
                  </td>
                  <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                    {course.status}
                  </td>
                </tr>
              ))
            ) : (
              <p className="text-center pt-8">There are no courses....</p>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex mt-8">
        <button className="register-course ml-auto px-4 py-5 flex items-center gap-2 rounded-md bg-blue-400">
          Register a course
          <DocumentPlusIcon width={20} />
        </button>
      </div>
    </section>
  )
}

export default Courses
