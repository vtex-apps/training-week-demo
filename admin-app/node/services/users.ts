import UserClient from '../clients/user'

const ROLES = ['110021']

const addUsers = (client: UserClient, users: any[]) => {
  const promises = users.map(async (user) => {
    const { id: userId } = await client.create({
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
    })

    return client.addRoles(userId, ROLES)
  })

  return Promise.all(promises)
}

export default {
  addUsers,
}
