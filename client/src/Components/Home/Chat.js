import { TabPanel, TabPanels, VStack, Text } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { FriendContext } from './Home';

function Chat() {
  const { friendList } = useContext(FriendContext);
  return friendList.length > 0 ? (
    <VStack>
      <TabPanels>
        <TabPanel>Friend one</TabPanel>
        <TabPanel>Friend two</TabPanel>
      </TabPanels>
    </VStack>
  ) : (
    <VStack
      justify="center"
      pt="5rem"
      w="100%"
      textAlign="center"
      fontSize="lg"
    >
      < TabPanels >
        <TabPanel>
          <Text> No Friends :( Click add friend to start chatting </Text>
        </TabPanel>
      </TabPanels >
    </VStack >
  );
}

export default Chat;