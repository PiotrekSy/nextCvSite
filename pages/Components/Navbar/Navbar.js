import * as React from 'react';
import Box from '@mui/material/Box';
import NavigationWeb from './NavigationWeb';
import { useState, useEffect } from 'react';
import NavigationMobile from './NavigationMobile';

const PersistentDrawerRight = () => {

  const [windowSize, setWindowSize] = useState();

  useEffect(() => setWindowSize(window.innerWidth), [])
  useEffect(() => window.onresize = () => setWindowSize(window.innerWidth), []);

  return (
    <Box >
      {windowSize < 900 ? <NavigationMobile /> : <NavigationWeb />}
    </Box>
  );
};

export default PersistentDrawerRight;