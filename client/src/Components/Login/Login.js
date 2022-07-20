import { VStack, ButtonGroup, Heading, Button, Text } from '@chakra-ui/react'
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from '../TextField';
import { useNavigate } from 'react-router-dom';
import { AccountContext } from '../AccountContext';
import { useContext, useState } from 'react';

const Login = () => {
  const { setUser } = useContext(AccountContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required("Username Required")
          .min(6, "Username too short")
          .max(28, "Username too long"),
        password: Yup.string()
          .required("Password required!")
          .min(6, "Password too short!")
          .max(28, "Password too long!")
      })}
      onSubmit={(values, actions) => {
        const vals = { ...values };
        // alert(JSON.stringify(values, null, 2));
        actions.resetForm();
        fetch(`${process.env.REACT_APP_SERVER_URL}/auth/login`, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(vals),
        }).catch(err => {
          return;
        }).then(res => {
          if (!res || !res.ok || res.status >= 400) {
            return;
          }
          return res.json();
        })
          .then(data => {
            if (!data) return;
            setUser({ ...data });
            if (data.status) {
              setError(data.status);
            } else if (data.loggedIn) {
              navigate("/home")
            }

          });
      }}
    >

      <VStack
        as={Form}
        w={{ base: "90%", md: "500px" }}
        m="auto"
        justify="center"
        h="100vh"
        spacing="1rem"
      >
        <Heading>Log In</Heading>
        <Text as="p" color="red.500">
          {error}
        </Text>
        <TextField
          name="username"
          placeholder="Enter username"
          autoComplete="off"
          label="Username"
        />
        <TextField
          name="password"
          placeholder="Enter password"
          autoComplete="off"
          label="Password"
          type="password"
        />
        <ButtonGroup pt="1rem">
          <Button colorScheme="teal" type='submit'>Log In</Button>
          <Button onClick={() => navigate("/register")}>Create Account</Button>
        </ButtonGroup>
      </VStack>
    </Formik >
  );
};

export default Login
