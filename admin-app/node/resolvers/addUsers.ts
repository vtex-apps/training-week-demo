import { ForbiddenError } from '@vtex/api'

import UserService from '../services/users'

type UserInput = {
  firstName: string
  lastName: string
  email: string
}

const addUsers = async (
  _: any,
  { users }: { users: UserInput[] },
  { vtex: { adminUserAuthToken }, clients: { user: userClient } }: Context
) => {
  const [, payload] = (adminUserAuthToken as string).split('.')

  const { sub } = JSON.parse(Buffer.from(payload, 'base64').toString('ascii'))

  if (sub !== 'bruno.moreira@vtex.com.br') {
    throw new ForbiddenError('Só o Bruno Moreira pode fazer isso!')
  }

  UserService.addUsers(userClient, users)

  return true
}

export default addUsers
