import { Box, Typography } from '@mui/material';
import { experiences } from '../JSONs/JSONprojects';
import ExperienceItem from '../components/ExperienceItem';
import { Icon } from '@iconify/react';

const Experiences = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '440px',

        height: '325px',
        padding: '16px',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        color: 'white',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: 'fit-content',
          height: '26px',
          padding: '2px 10px',
          alignItems: 'center',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        }}
      >
        <Icon icon='bytesize:portfolio' />
        <Typography sx={{ fontSize: '14px', color: 'white', marginLeft: '6px', zIndex: '10' }}>
          Experiencia laboral
        </Typography>
      </Box>
      <Box
        sx={{
          overflow: 'auto',
          '&::-webkit-scrollbar': {
            width: '5px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#333',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
          },
        }}
      >
        <Box sx={{ marginTop: '20px' }}>
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={index}
              index={index}
              logoImgSrc={experience.logoImgSrc}
              name={experience.name}
              period={experience.period}
              role={experience.role}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Experiences;
