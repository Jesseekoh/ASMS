const baseUrl = import.meta.env.VITE_API_BASE_URL
/**
 * This function sets userToken to sessionStorage
 * @param {*} userToken
 */
export const setSessionToken = (userToken) => {
  sessionStorage.setItem('token', JSON.stringify(userToken))
}

/**
 * This function gets userToken from sessionStorage
 * @returns userToken
 */
export const getSessionToken = () => {
  const tokenString = sessionStorage.getItem('token')
  const userToken = JSON.parse(tokenString)
  return userToken
}

/**
 * This function fetches user dashboard details from the api
 * @returns {object} data
 */
export const fetchDashboardDetails = async () => {
  const response = await fetch(baseUrl + '/dashboard', {
    credentials: 'include',
  })
  return response.json()
}

/**
 * This function fetches user biodata from the api
 * @returns {object} user biodata
 */
export const fetchBiodata = async () => {
  const response = await fetch(baseUrl + '/biodata', {
    credentials: 'include',
  })

  return response.json()
}

/**
 * This function fetches user courses from the api
 * @returns {array} user courses
 */
export const fetchCoures = async () => {
  const response = await fetch(baseUrl + '/courses', {
    credentials: 'include',
  })
  return response.json()
}
