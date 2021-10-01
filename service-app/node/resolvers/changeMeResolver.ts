export const changeMeResolver =  (
  _: unknown,
  _args: any /** the props that you defined in query arguments */,
  ctx: Context
  ) => {
  const {} = ctx

  return {
    message: 'I am almost sure that you have to change me'
  }
}
