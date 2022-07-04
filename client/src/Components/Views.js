import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import SignUp from './Login/SignUp';
import { Text } from '@chakra-ui/react';

export const Views = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<SignUp />} />
      <Route path='*' element={<Login />} />
      <Route path='/home' element={<Text>Hi welcome home</Text>} />
    </Routes >
  )
}

export default Views; 