import { users } from './utils/users'

export const fetchData = (key) => {
  // const data = JSON.parse(localStorage.getItem(key))
  return JSON.parse(localStorage.getItem(key))
  // return data
}

export const fetchAnnouncements = async () => {
  const resp = await fetch('http://localhost:3006/api/v1/restaurants')
  const json = await resp.json()
  // console.log(json)
  return json.data.restaurants
}

export const getUser = (email, password) => {
  for (let user of users) {
    if (email == user.email && password === user.password) {
      return user
    }
  }
}
