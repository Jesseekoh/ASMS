import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Root from './routes/Root'
import Error from './routes/Error'
import { useState } from 'react'
import Layout, { layoutLoader } from './layouts/Layout'
import Dashboard from './routes/Dashboard'
import Login from './routes/Login'
import Announcements from './components/Announcements/AnnouncementList'
import userDetailsContext from './contexts/userDetailsContext'
import { QueryClient, QueryClientContext } from '@tanstack/react-query'
import SignUp from './routes/SignUp'
import { loginAction } from './actions/login'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
})
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    loader: layoutLoader,
    children: [
      // {
      //   index: true,
      //   element: <Login />,
      //   // loader: layoutLoader
      //   errorElement: <Error />,

      // },
      {
        path: '/',
        element: <Root />,
        // loader: layoutLoader
        errorElement: <Error />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
        errorElement: <Error />,
        // loader: dashboardLoader,
      },
      {
        path: '/announcements',
        element: <Announcements />,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    action: loginAction,
  },
  {
    path: '/signup',
    element: <SignUp />,
    errorElement: <Error />,
  },
])
function App() {
  // const [userName, setUserName] = useState('')
  const [userDetails, setUserDetails] = useState({
    username: 'Jesseekoh',
    fullName: 'Jesse Ekoh-Ordan',
    isLoggedIn: false,
  })
  return (
    <>
      {/* <QueryClientContext client={queryClient}> */}
      <userDetailsContext.Provider value={userDetails}>
        <RouterProvider router={router} />
      </userDetailsContext.Provider>
      {/* </QueryClientContext> */}
    </>
  )
}

export default App
