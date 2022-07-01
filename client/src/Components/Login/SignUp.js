import { VStack, ButtonGroup, Heading, Button } from '@chakra-ui/react'
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from './TextField';
import { useNavigate } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';

const SignUp = () => {
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
        fetch("http://localhost:4000/auth/register", {
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
            console.log(data);
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
        <Heading>Sign Up</Heading>
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
          <Button colorScheme="teal" type='submit'>Create Account</Button>
          <Button onClick={() => navigate("/")} leftIcon={<ArrowBackIcon />}>Back</Button>
        </ButtonGroup>
      </VStack>
    </Formik >
  );
};

export default SignUp;