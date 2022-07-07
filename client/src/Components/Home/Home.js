import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react'
import Sidebar from './Sidebar';

function Home() {
  return (
    <Grid templateColumns="repeat(10, 1fr)" h="100vh">

      <GridItem colSpan="3" borderRight="1px solid gray"> <Sidebar /></GridItem>
      <GridItem colSpan="7"></GridItem>

    </Grid>
  )
}

export default Home;
