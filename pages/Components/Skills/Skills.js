import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from './Skills.module.scss';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Section as FullPageSection } from 'react-fullpage';

const Skills = () => {
  return <FullPageSection>
    <div className={styles.section}>
      <Container maxWidth="lg" sx={{ border: '1px solid red' }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          SKILLS
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don&apos;t simply skip over it entirely.
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button variant="contained">Main call to action</Button>
          <Button variant="outlined">Secondary action</Button>
        </Stack>
      </Container>
    </div>
  </FullPageSection>
};

export default Skills;
