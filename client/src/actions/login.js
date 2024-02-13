import { redirect } from 'react-router-dom'
import { getUser } from '../helper'
import { users } from '../utils/users'

export const loginAction = async ({ request }) => {
  console.log(request)
  const data = await request.formData()

  const submission = {
    email: data.get('email'),
    password: data.get('password'),
  }

  const user = getUser(submission.email, submission.password)
  return user
}
