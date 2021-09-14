import { extendTheme } from '@chakra-ui/react';

// eslint-disable-next-line import/prefer-default-export
export const theme = extendTheme({
  colors: {
    gray: {
      900: '#181b23',
      800: '#1f2029',
      700: '#353646',
      600: '#4b4d63',
      500: '#616480',
      400: '#797d9a',
      300: '#9699b0',
      200: '#b3b5c6',
      100: '#d1d2dc',
      50: '#eeeef2',
    },
    backgroundRight: 'linear-gradient(180deg, #484FA0 0%, #04B2E7 100%)',
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.50',
      },
    },
  },
});
