import { prop } from 'ramda'

export const queries = {
  externalMasterDataUsers: (_: unknown, args: UsersArgs, ctx: Context) => {
    const { filter, perPage, pageNumber } = args
    const {
      clients: { externalMasterdata },
    } = ctx

    return {
      data: externalMasterdata.getUsers(filter, perPage, pageNumber),
      pagination: {
        page: pageNumber,
        pageSize: perPage,
        total: externalMasterdata.getTotalNumber(filter),
      },
    }
  },
}

export const userResolvers = {
  User: {
    rcLastCart: prop('rclastcast'),
    rcLastCartValue: prop('rclastcartvalue'),
    rcLastSession: prop('rclastsession'),
    rcLastSessionDate: prop('rclastsessiondate'),
  },
}
