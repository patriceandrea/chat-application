import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalCloseButton
} from '@chakra-ui/modal';
import React from 'react'
import { ModalOverlay, Button } from "@chakra-ui/react"


function AddFriendModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add A Friend</ModalHeader>
        <ModalCloseButton />
        <ModalBody></ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={onClose}
            type="submit"
          >
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default AddFriendModal; 