import React, { useState } from 'react'
import { Button, /** IconUpload, */ Modal, Dropzone, /** Table */ } from 'vtex.styleguide'
// import csv from 'csvtojson'
// import { useQuery, useMutation } from 'react-apollo'

const UsersPage = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  const toggleModal = () => setModalOpen((bool) => !bool)

  return (
    <>
      <Modal centered isOpen={isModalOpen} onClose={toggleModal}>
        <div className="flex flex-column dark-gray">
          <Dropzone
            onDropAccepted={() => alert('accepted')}
            onDropReject={() => alert('rejected')}
            isLoading={false}
           ></Dropzone>
        </div>
      </Modal>
      <div className="flex justify-center">
        <div className="mb4">
          <Button variation="primary" onClick={() => alert('clicked')}></Button>
        </div>
      </div>
    </>
  )
}

export default UsersPage
