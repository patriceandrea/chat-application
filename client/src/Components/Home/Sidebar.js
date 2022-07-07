import { ChatIcon } from '@chakra-ui/icons';
import { Heading, HStack, VStack } from '@chakra-ui/react';
import React from 'react'
import { Button } from "@chakra-ui/button"

function Sidebar() {
  return (
    <VStack py="1.4rem">
      <HStack><Heading size="md">Add Friend</Heading>
        <Button>
          <ChatIcon />
        </Button>
      </HStack>
    </VStack >
  )
}

export default Sidebar;
