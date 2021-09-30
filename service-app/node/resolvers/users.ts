export const queries = {
  users: (_: unknown, _args: unknown, ctx: Context) => {
    const {
      clients: { users },
    } = ctx

    return users.getUsers()
  },
}
