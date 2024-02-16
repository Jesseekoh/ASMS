// Token session storage
// set usertoken to session storage
export const setSessionToken = (userToken) => {
  sessionStorage.setItem('token', JSON.stringify(userToken))
}

// get usertoken from session storage
export const getSessionToken = () => {
  const tokenString = sessionStorage.getItem('token')
  const userToken = JSON.parse(tokenString)
  return userToken
}

// fetch info to display in the dashboard route
export async function fetchDashboardDetails() {
  const baseUrl = import.meta.env.VITE_API_BASE_URL
  // console.log(baseUrl)
  const response = await fetch(baseUrl + '/dashboard', {
    credentials: 'include',
  })
  const json = await response.json()
  return json
}
