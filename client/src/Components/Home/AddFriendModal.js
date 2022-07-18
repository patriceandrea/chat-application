import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalCloseButton
} from '@chakra-ui/modal';
import React, { useState } from 'react'
import { ModalOverlay, Button, Heading } from "@chakra-ui/react"
import TextField from '../TextField';
import { Formik, Form } from 'formik';
import socket from "../../socket"
const Yup = require("yup");

const friendSchema = Yup.object({
  friendName: Yup.string()
    .required("Username required")
    .min(6, "Invalid username")
    .max(28, "Invalid Username ")
})

function AddFriendModal({ isOpen, onClose }) {
  const [error, setError] = useState("")

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add A Friend</ModalHeader>
        <ModalCloseButton />
        <Formik
          initialValues={{ friendName: "" }}
          onSubmit={values => {
            socket.emit("add_friend",
              values.friendName,
              ({ errorMsg, done }) => {
                if (done) {
                  onClose();
                  return;
                }
                setError(errorMsg)
              }
            );
          }}
          validationSchema={friendSchema}
        >
          <Form>
            <ModalBody>
              <Heading fontSize="md" as="p" color="red.500" textAlign="center">{error}</Heading>
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