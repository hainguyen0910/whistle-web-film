import { extendTheme } from '@chakra-ui/react';
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';

const theme = extendTheme({
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  components: {
    Steps,
  },
});
export default theme;
