import { prop } from 'ramda'

export const queries = {
  masterDataUsers: (_: unknown, args: UsersArgs, ctx: Context) => {
    const {
      clients: { masterdata },
    } = ctx

    const { filter, perPage, pageNumber } = args

    return masterdata.searchDocumentsWithPaginationInfo({
      dataEntity: 'CL',
      fields: ['_all'],
      pagination: {
        page: pageNumber,
        pageSize: perPage,
      },
      where: filter,
    })
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
