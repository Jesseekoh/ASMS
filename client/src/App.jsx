import { createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import Layout from './layout/Layout'
import { RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Biodata from './pages/Biodata'
import ErrorPage from './pages/ErrorPage'
import Register from './pages/Register'
import Announcements from './pages/Announcements'
import Courses from './pages/Courses'
import Login from './pages/Login'
import RequireAuth from './components/RequireAuth'
import Results from './pages/Results'

const queryClient = new QueryClient()

function App() {
  const router = createBrowserRouter([
    {
      path: '*',
      element: <ErrorPage />,
    },
    {
      element: <Layout />,

      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: (
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          ),
        },

        {
          path: '/dashboard',
          element: (
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          ),
        },
        {
          path: '/biodata',
          element: (
            <RequireAuth>
              <Biodata />
            </RequireAuth>
          ),
        },
        {
          path: '/courses',
          element: (
            <RequireAuth>
              <Courses />
            </RequireAuth>
          ),
        },
        {
          path: '/announcements',
          element: (
            <RequireAuth>
              <Announcements />
            </RequireAuth>
          ),
        },
        {
          path: '/results',
          element: <Results />,
        },
      ],
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/login',
      element: <Login />,
    },
  ])

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
