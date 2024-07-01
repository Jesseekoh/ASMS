/* eslint-disable no-unused-vars */
import { Form, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const RegisterForm = () => {
  const API_BASE_URL_1 = import.meta.env.VITE_API_BASE_URL_1
  const API_BASE_URL_2 = import.meta.env.VITE_API_BASE_URL
  const [formFirstName, setFormFirstName] = useState('')
  const [formLastName, setFormLastName] = useState('')
  const [formDepartment, setFormDepartment] = useState('')
  const [formState, setFormState] = useState('')
  const [formGender, setFormGender] = useState('')
  const [formLevel, setFormLevel] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [formPassword, setFormPassword] = useState('')
  const [formConfirmPassword, setFormConfirmPassword] = useState('')

  const navigate = useNavigate()
  // queries
  const {
    data: majorsData,
    isLoading: majorsIsLoading,
    isError: majorsIsError,
  } = useQuery({
    queryKey: ['majors'],
    queryFn: async () => {
      const response = await fetch(API_BASE_URL_1 + '/majors')
      return response.json()
    },
  })

  const {
    data: statesData,
    isLoading: stateIsLoading,
    isError: statesIsError,
  } = useQuery({
    queryKey: ['states'],
    queryFn: async () => {
      const response = await fetch(API_BASE_URL_1 + '/states')
      return response.json()
    },
  })

  const {
    data: levelData,
    isLoading: levelIsLoading,
    isError: levelIsError,
  } = useQuery({
    queryKey: ['levels'],
    queryFn: async () => {
      const response = await fetch(API_BASE_URL_1 + '/levels')
      return response.json()
    },
  })

  const registerUser = async (credentials) => {
    const response = await fetch(API_BASE_URL_2 + '/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })

    const json = await response.json()
    return json
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formConfirmPassword != formPassword) {
      toast.error("Password doesn't match")
    } else {
      const token = await registerUser({
        first_name: formFirstName,
        last_name: formLastName,
        email: formEmail,
        gender: formGender,
        major_id: formDepartment,
        state_id: formState,
        level_id: formLevel,
        password: formPassword,
        confirm_password: formConfirmPassword,
      })
      if (token.url) {
        toast.success('Account created successfully!')
        navigate(token.url)
      }
    }
  }

  return (
    <>
      <ToastContainer />
      <Form
        method="post"
        action="/register"
        onSubmit={handleSubmit}
        className="h-full flex flex-col justify-center sm:py-12"
      >
        <div className=" xs:p-0 mx-auto md:w-full md:max-w-md">
          <h1 className="font-bold text-center text-2xl mb-5">Register</h1>
          <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div className="px-5 py-7">
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                First Name
              </label>
              <input
                type="text"
                value={formFirstName}
                onChange={(e) => setFormFirstName(e.target.value)}
                required
                placeholder="Mike"
                name="first-name"
                id="first-name"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              />
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Last Name
              </label>
              <input
                type="text"
                required
                value={formLastName}
                placeholder="Ross"
                onChange={(e) => setFormLastName(e.target.value)}
                name="last-name"
                id="last-name"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              />

              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Gender
              </label>
              <select
                required
                id="gender"
                name="gender"
                value={formGender}
                onChange={(e) => setFormGender(e.target.value)}
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Department
              </label>
              <select
                required
                id="department"
                value={formDepartment}
                onChange={(e) => setFormDepartment(e.target.value)}
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              >
                <option value={''}>Select a Department</option>
                {Array.isArray(majorsData) &&
                  majorsData.map((major) => (
                    <option key={major.id} value={major.id}>
                      {major.name}
                    </option>
                  ))}
              </select>
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                State
              </label>
              <select
                required
                name="state"
                id="state"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                value={formState}
                onChange={(e) => setFormState(e.target.value)}
              >
                <option value={''}>Select a State</option>
                {Array.isArray(statesData) &&
                  statesData.map((state) => (
                    <option key={state.id} value={state.id}>
                      {state.name}
                    </option>
                  ))}
              </select>
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Level
              </label>
              <select
                required
                name="level"
                id="level"
                value={formLevel}
                onChange={(e) => setFormLevel(e.target.value)}
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              >
                <option value={''}>Select your level</option>
                {Array.isArray(levelData) &&
                  levelData.map((level) => (
                    <option key={level.id} value={level.id}>
                      {level.level}
                    </option>
                  ))}
              </select>
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                E-mail
              </label>
              <input
                type="email"
                required
                name="email"
                id="email"
                placeholder="mikeross@youmail.com"
                value={formEmail}
                onChange={(e) => setFormEmail(e.target.value)}
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              />
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Password
              </label>
              <input
                required
                type="password"
                name="password"
                id="password"
                placeholder="password"
                value={formPassword}
                onChange={(e) => setFormPassword(e.target.value)}
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              />
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Confirm password
              </label>
              <input
                required
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="confirm password"
                value={formConfirmPassword}
                onChange={(e) => {
                  setFormConfirmPassword(e.target.value)
                }}
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              />
              <button
                type="submit"
                className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                <span className="inline-block mr-2">Register</span>
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

export default RegisterForm
