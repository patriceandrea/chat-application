import { VStack, ButtonGroup, FormControl, FormLabel, Button, FormErrorMessage, Input } from '@chakra-ui/react'
import React from 'react'

const Login = () => {
  return (
    <div>
      <VStack as="form" w={{ base: "90%", md: "500 px" }} m="auto" justify="center" h="100vh">
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input name='username' placeholder='Enter username' autoComplete='off' />
          <FormErrorMessage>Invalid Username</FormErrorMessage>
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input name='password' placeholder='Enter password' autoComplete='off' />
          <FormErrorMessage>Invalid Password</FormErrorMessage>
        </FormControl>

        <ButtonGroup>
          <Button colorScheme="teal" type='submit'>Log In</Button>
          <Button>Create Account</Button>
        </ButtonGroup>
      </VStack>
    </div >
  )
}

export default Login
