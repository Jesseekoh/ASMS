/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { getSessionToken } from '../helper'
import { useAppStore } from '../../store'

const RequireAuth = ({ children }) => {
  const setToken = useAppStore((state) => state.setToken)
  const setUsername = useAppStore((state) => state.setUsername)
  let token = getSessionToken()
  let location = useLocation()

  if (token) {
    console.log(token)
    setUsername(token.first_name)
    setToken(token.student_id)
  }

  if (!token) {
    return <Navigate to={'/login'} state={{ from: location }} replace />
  }
  return children
}

export default RequireAuth
