import { VStack, ButtonGroup, FormControl, FormLabel, Button, FormErrorMessage, Input, Heading } from '@chakra-ui/react'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: Yup.object({
      username: Yup.string().required("Username Required").min(6, "Username too short").max(28, "Username too long")
    }),
  });

  return (
    <div>
      <VStack
        as="form"
        w={{ base: "90%", md: "500px" }}
        m="auto"
        justify="center"
        h="100vh"
        spacing="1rem"
      >

        <Heading>Log In</Heading>
        <FormControl>
          <FormLabel fontSize="lg">Username</FormLabel>
          <Input name='username' placeholder='Enter username' autoComplete='off' size="lg" />
          <FormErrorMessage>Invalid Username</FormErrorMessage>
        </FormControl>

        <FormControl>
          <FormLabel fontSize="lg">Password</FormLabel>
          <Input name='password' placeholder='Enter password' autoComplete='off' size="lg" />
          <FormErrorMessage>Invalid Password</FormErrorMessage>
        </FormControl>

        <ButtonGroup pt="1rem">
          <Button colorScheme="teal" type='submit'>Log In</Button>
          <Button>Create Account</Button>
        </ButtonGroup>
      </VStack>
    </div >
  )
}

export default Login
