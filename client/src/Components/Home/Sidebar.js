import { ChatIcon } from '@chakra-ui/icons';
import { Divider, Heading, HStack, Tab, TabList, VStack, Text } from '@chakra-ui/react';
import React from 'react'
import { Button } from "@chakra-ui/button"


function Sidebar() {
  return (
    <VStack py="1.4rem">
      <HStack justify="space-evenly" w="100%">
        <Heading size="md">Add Friend</Heading>
        <Button>
          <ChatIcon />
        </Button>
      </HStack>
      <Divider />
      <VStack as={TabList}>
        <HStack as={Tab}><Text>John Smith</Text></HStack>
        <HStack as={Tab}><Text>John Smith</Text></HStack>
      </VStack>



    </VStack >
  )
}

export default Sidebar;
