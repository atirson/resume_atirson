import { Box, Flex } from '@chakra-ui/react';
import { Header } from '../components/Header/Header';

export default function Home() {
  return (
    <Flex
     alignItems="center"
     justify="center"
     bg="black"
    >
    <Flex flex="1" maxWidth={1480} flexDirection="row" h="100vh" >
      <Box minW="60%" bg="white" height="100%">
        <Header />
      </Box>
      <Box minW="40%" bg="backgroundRight" height="100%"></Box>
    </Flex>
    </Flex>
  );
}
