import {
  Box, Flex, Image, Text,
} from '@chakra-ui/react';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { AiOutlineMail, AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { Icon } from '../Icon/Icon';

export function Header() {
  return (
    <Flex direction="row" p={[6, 8]}>
      <Box boxSize={['xs']}>
        <Image boxSize="300px" src="https://bit.ly/sage-adebayo" alt="Atirson Fabiano" borderRadius={8} />
      </Box>
      <Box>
        <Box display="flex">
          <Text color="#277FC3" fontWeight="bold" fontSize={['md', '2xl', '4xl']}>ATIRSON</Text>
          <Text color="#666" ml={2} fontSize={['md', '2xl', '4xl']}>OLIVEIRA</Text>
        </Box>
        <Box>
          <Text color="#666" fontSize={['md', 'lg', 'xl']}>SOFTWARE ENGINEER</Text>
        </Box>
        <Box pt={8}>
          <Icon href='tel:62994377875' text="62 - 9 9437-7875" icon={FaPhoneSquareAlt} />
          <Icon href='mailto:fabiano.oliveira2213@gmail.com' text="fabiano.oliveira2213@gmail.com" icon={AiOutlineMail} />
          <Icon href='https://github.com/atirson' text="My GitHub" icon={AiOutlineGithub} />
          <Icon href='https://www.linkedin.com/in/atirson-fabiano/' text="My Linkedin" icon={AiFillLinkedin} />
        </Box>
      </Box>
    </Flex>
  );
}
