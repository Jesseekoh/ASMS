import { useContext } from 'react'
import { Form } from 'react-router-dom'
import userDetailsContext from '../../contexts/userDetailsContext'
// import { userDetailsContext } from '../../contexts/userDetailsContext'
const SignupForm = () => {
  const userDetails = useContext(userDetailsContext)
  console.log(userDetails)
  const handleLogin = () => {}
  return (
    <div>
      <Form
        method="post"
        action="/login"
        className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12"
      >
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <h1 className="font-bold text-center text-2xl mb-5">Sign Up</h1>
          <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div className="px-5 py-7">
              <label
                htmlFor="first-name"
                className="font-semibold text-sm text-gray-600 pb-1 block"
              >
                First Name
              </label>
              <input
                type="text"
                required
                name="first-name"
                id="first-name"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              />
              <label
                htmlFor="last-name"
                className="font-semibold text-sm text-gray-600 pb-1 block"
              >
                Last Name
              </label>
              <input
                type="text"
                required
                name="last-name"
                id="last-name"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              />
              <label
                htmlFor="matric-number"
                className="font-semibold text-sm text-gray-600 pb-1 block"
              >
                Matric No
              </label>
              <input
                type="text"
                required
                name="matric-number"
                id="matric-number"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              />
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                E-mail
              </label>
              <input
                type="text"
                required
                name="email"
                id="email"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              />
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Password
              </label>
              <input
                required
                type="text"
                name="password"
                id="password"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              />
              <button
                type="submit"
                onSubmit={handleLogin}
                className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                <span className="inline-block mr-2">Sign up</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default SignupForm
