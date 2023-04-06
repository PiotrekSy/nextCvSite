import * as React from 'react';
import Box from '@mui/material/Box';
import NavigationWeb from './NavigationWeb';
import NavigationMobile from './NavigationMobile';

const PersistentDrawerRight = ({ direction }) => {

  return (
    <Box >
      {direction === 'row' ? <NavigationWeb /> : <NavigationMobile />}
    </Box>
  );
};

export default PersistentDrawerRight;