import { ChatIcon } from '@chakra-ui/icons';
import { Divider, Heading, HStack, Tab, TabList, VStack, Text, Circle } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { Button } from "@chakra-ui/button"
import { FriendContext } from './Home';


function Sidebar() {
  const { friendList, setFriendList } = useContext(FriendContext);

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
        {/* <HStack as={Tab}>
          <Circle bg="red.500" w="20px" h="20px" />
          <Text>John Smith</Text>
        </HStack>
        <HStack as={Tab}>
          <Circle bg="green.500" w="20px" h="20px" />
          <Text>John Smith</Text>
        </HStack> */}
        {friendList.map(friend => {
          return (<HStack as={Tab}>
            <Circle bg={friend.connected ? "green.500" : "red.500"}
              w="20px"
              h="20px" />
            <Text>{friend.username}</Text>
          </HStack>)
        })}
      </VStack>
    </VStack >
  )
}

export default Sidebar;
