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
  try {
    const response = await fetch('https://www.for-ward.tech/asms/biodata', {
      credentials: 'include',
    })

    if (response.ok) {
      return response.json()
    }
  } catch (error) {
    console.log(error)
  }
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

/**
 * This function fetches student results
 * @returns {array} user results
 */
export const fetchResults = async () => {
  const response = await fetch(baseUrl + '/results', {
    credentials: 'include',
  })

  return response.json()
}
