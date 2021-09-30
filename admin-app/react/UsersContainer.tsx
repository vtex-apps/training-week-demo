import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { Layout, PageBlock, PageHeader } from 'vtex.styleguide'
import UsersPage from './pages/UsersPage'

import './styles.global.css'

const UsersContainer: FC = () => {
  return (
    <Layout
      pageHeader={
        <PageHeader
          title={<FormattedMessage id="admin-trainingweek.users-title" />}
        />
      }
    >
      <PageBlock variation="full">
        <UsersPage />
      </PageBlock>
    </Layout>
  )
}

export default UsersContainer
