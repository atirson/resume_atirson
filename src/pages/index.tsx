import { Box, Flex } from '@chakra-ui/react';
import { Header } from '../components/Header/Header';
import { Timeline } from '../components/Timeline/Timeline';

export default function Home() {
  return (
    <Flex
     alignItems="center"
     justify="center"
     bg="black"
    >
    <Flex flex="1" maxWidth={1480} flexDirection="row" h="100%" >
      <Box minW="60%" bg="white" height="100%">
        <Header />
        <Timeline />
      </Box>
      <Box minW="40%" bg="backgroundRight" height="100%"></Box>
    </Flex>
    </Flex>
  );
}
