import React, { FC, useCallback, useState } from 'react'
import { Button, IconUpload, Modal, Dropzone, Alert } from 'vtex.styleguide'
import csv from 'csvtojson'
import { useMutation } from 'react-apollo'

import ADD_USERS_MUTATION from '../graphql/addUsersMutation.graphql'

const UsersPage: FC = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  const [addUsers, { loading }] = useMutation(ADD_USERS_MUTATION)
  const [users, setUsers] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  const toggleModal = () => setModalOpen((bool) => !bool)

  const onFileHandler = useCallback(
    (files: File[]) => {
      const file = files?.[0]

      if (!file) {
        return
      }

      file
        .text()
        .then((str) => csv().fromString(str))
        .then((response) => setUsers(response))
    },
    [setUsers]
  )

  const onClickDropzoneButton = useCallback(() => {
    if (users.length === 0) {
      return
    }

    addUsers({
      variables: { users },
    })
      .then(() => setSent(true))
      .catch((err: Error) => {
        setError(err.message)

        throw err
      })
      .finally(toggleModal)
  }, [addUsers, users])

  return (
    <>
      <Modal centered isOpen={isModalOpen} onClose={toggleModal}>
        <div className="flex flex-column dark-gray">
          <Dropzone
            onDropAccepted={onFileHandler}
            onDropReject={() => setUsers([])}
            isLoading={loading}
          >
            <div className="pt7">
              <div>
                <span className="f4">Drop here your XLS or </span>
                <span className="f4 c-link" style={{ cursor: 'pointer' }}>
                  choose a file
                </span>
              </div>
            </div>
          </Dropzone>
          <div className="flex justify-center pa5">
            <Button variation="secondary" onClick={onClickDropzoneButton}>
              <span className="pa3">Enviar</span>
            </Button>
          </div>
        </div>
      </Modal>
      <div className="flex justify-center">
        <div>
          {error ? (
            <Alert type="error" onClose={() => setError(null)}>
              {error}
            </Alert>
          ) : null}
          {sent ? (
            <Alert type="success" onClose={() => setSent(false)}>
              Arquivo Enviado
            </Alert>
          ) : null}
        </div>
        <div className="mb4">
          <Button variation="primary" onClick={toggleModal}>
            <span className="pa3">
              <IconUpload />
            </span>
            <span className="pa3">Importar CSV</span>
          </Button>
        </div>
      </div>
    </>
  )
}

export default UsersPage
