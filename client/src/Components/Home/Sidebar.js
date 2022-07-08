import { ChatIcon } from '@chakra-ui/icons';
import { Divider, Heading, HStack, Tab, TabList, VStack, Text, Circle, useDisclosure } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { Button } from "@chakra-ui/button"
import { FriendContext } from './Home';
import AddFriendModal from './AddFriendModal';


function Sidebar() {
  const { friendList, setFriendList } = useContext(FriendContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <VStack py="1.4rem">
        <HStack justify="space-evenly" w="100%">
          <Heading size="md">Add Friend</Heading>
          <Button onClick={onOpen}>
            <ChatIcon />
          </Button>
        </HStack>
        <Divider />
        <VStack as={TabList}>
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
      <AddFriendModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default Sidebar;
