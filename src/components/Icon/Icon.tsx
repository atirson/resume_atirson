import {
  LinkProps as ChakraLinkProps, Link, Icon as ChakraIcon, Text, Box,
} from '@chakra-ui/react';
import { ElementType } from 'react';

interface IconProps extends ChakraLinkProps{
  icon: ElementType;
  text: string;
  href: string;
}

export function Icon({
  icon, text, href, ...rest
}: IconProps) {
  return (
    <Link target="_blank" href={href} {...rest}>
      <Box display="flex" flexDirection="row" alignItems="center" mt={4}>
        <ChakraIcon as={icon} fontSize="24" mr={2} color="#277FC3" />
        <Text color="#666" fontSize={['md', 'lg']}>
          {text}
        </Text>
      </Box>
    </Link>
  );
}
