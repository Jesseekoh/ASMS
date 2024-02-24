import { useState } from 'react'
// import { useAppStore } from '../../store'
import { Form } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { setSessionToken } from '../helper'

/**
 * This component renders a log in form
 *
 * @returns {ReactNode} a react login form element
 */

const LoginForm = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL
  // state for the log in form
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const navigate = useNavigate()
  const loginUser = async (credentials) => {
    const response = await fetch(baseUrl + '/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
    return response.json()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userToken = await loginUser({
      email: loginEmail,
      password: loginPassword,
    })

    if (userToken.url) {
      console.log(userToken)
      setSessionToken(userToken)
      navigate(userToken.url)
    }
  }

  return (
    <>
      <ToastContainer />

      <Form
        method="post"
        onSubmit={handleSubmit}
        className="h-ful flex flex-col justify-center sm:py-12"
      >
        <div className=" xs:p-0 mx-auto md:w-full md:max-w-md">
          <h1 className="font-bold text-center text-2xl mb-5">Log in</h1>
          <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div className="px-5 py-7">
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                E-mail
              </label>
              <input
                type="text"
                required
                name="email"
                id="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
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
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              />
              <button
                type="submit"
                // onClick={handleLogin}
                className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                <span className="inline-block mr-2">Login</span>
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
    </>
  )
}

export default LoginForm
