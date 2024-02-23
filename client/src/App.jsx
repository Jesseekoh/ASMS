import { createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import Announcements from './pages/Announcements'
import Biodata from './pages/Biodata'
import Courses from './pages/Courses'
import Dashboard from './pages/Dashboard'
import ErrorPage from './pages/ErrorPage'
import Fees from './pages/Fees'
import Login from './pages/Login'
import Register from './pages/Register'
import Results from './pages/Results'
import RequireAuth from './components/RequireAuth'

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
          path: '/fees',
          element: (
            <RequireAuth>
              <Fees />
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
          element: (
            <RequireAuth>
              <Results />
            </RequireAuth>
          ),
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
