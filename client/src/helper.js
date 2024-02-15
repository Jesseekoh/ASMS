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
  const response = await fetch('http://localhost:5000/dashboard', {
    credentials: 'include',
  })
  const json = await response.json()
  return json
}
