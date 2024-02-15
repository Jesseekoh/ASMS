import { DocumentPlusIcon } from '@heroicons/react/24/solid'
const Courses = () => {
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
            <tr>
              <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                1
              </td>
              <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                Introduction to Computer Science
              </td>
              <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                CSC101
              </td>
              <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                3
              </td>
              <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                C
              </td>
            </tr>
            <tr>
              <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                2
              </td>
              <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                Introduction to Cyber Hygiene
              </td>
              <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                CYB101
              </td>
              <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                2
              </td>
              <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                C
              </td>
            </tr>
            <tr>
              <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                3
              </td>
              <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                Descriptive Statistics
              </td>
              <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                STA101
              </td>
              <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                3
              </td>
              <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                C
              </td>
            </tr>
            <tr>
              <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                4
              </td>
              <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                General Physics 1
              </td>
              <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                PHY101
              </td>
              <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                2
              </td>
              <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                C
              </td>
            </tr>
            <tr>
              <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                5
              </td>
              <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                General Mathematics 1
              </td>
              <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                MTH101
              </td>
              <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                3
              </td>
              <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                C
              </td>
            </tr>
            <tr>
              <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                6
              </td>
              <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                General Physics Practical I
              </td>
              <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                PHY107
              </td>
              <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                1
              </td>
              <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                C
              </td>
            </tr>
            <tr>
              <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                7
              </td>
              <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                Communication in English I
              </td>
              <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                GST111
              </td>
              <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                2
              </td>
              <td className="text-left px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3">
                C
              </td>
            </tr>
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
