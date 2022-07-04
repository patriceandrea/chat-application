import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import SignUp from './Login/SignUp';
import { Text } from '@chakra-ui/react';
import PrivateRoutes from './PrivateRoutes';

export const Views = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<SignUp />} />
      <Route path='*' element={<Login />} />
      <Route>
        <Route element={<PrivateRoutes />} />
        <Route path='/home' element={<Text>Hi welcome home</Text>} />
      </Route>
    </Routes >
  )
}

export default Views; 