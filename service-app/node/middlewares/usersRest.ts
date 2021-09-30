export async function usersRest(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { users },
  } = ctx

  ctx.body = await users.getUsers()
  ctx.set({
    'Cache-Control': 'no-cache'
  })

  await next()
}
