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
import TextField from '../TextField';
import { Formik, Form } from 'formik';
const Yup = require("yup");

const friendSchema = Yup.object({
  friendName: Yup.string()
    .required("Username required")
    .min(6, "Invalid username")
    .max(28, "Invalid Username ")
})

function AddFriendModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add A Friend</ModalHeader>
        <ModalCloseButton />
        <Formik
          initialValues={{ friendName: "" }}
          onSubmit={values => {
            onClose();
            // alert(JSON.stringify(values, null, 2));
            // actions.resetForm();
          }}
          validationSchema={friendSchema}
        >
          <Form>
            <ModalBody>
              <TextField
                label="friend's name"
                placeholder="Enter friend's username.."
                autoComplete="off"
                name="friendName"
              />

            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}

                type="submit"
              >
                Submit
              </Button>
            </ModalFooter>
          </Form>
        </Formik>
      </ModalContent>
    </Modal >
  )
}

export default AddFriendModal; 