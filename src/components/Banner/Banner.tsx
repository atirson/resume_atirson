import { Image, Box } from '@chakra-ui/react';

export function Banner() {
  return (
    <Box w="100%" >
      <Image htmlWidth="100%" src='../../assets/banner.jpeg' fallbackSrc="https://via.placeholder.com/150" alt="Banner Principal"/>
    </Box>
  );
}
