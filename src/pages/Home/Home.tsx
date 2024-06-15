import { useContext } from 'react';
import { CurrentProyectSelectedContext } from '../../contexts/CurrentProyectSelectedContextProvider.js';
import { Welcome } from '../../components/Welcome/Welcome.js';
import { ProjectsListContainer } from '../../components/projectsList/ProjectsListContainer.js';
import { PreviewsListContainer } from '../../components/Previews/PreviewsListContainer.js';
import { ProjectSummary } from '../../components/ProjectSummary/ProjectSummary.js';
import { Box, Typography } from '@mui/material';
import Experiences from '../../views/Experiences';
import Stack from '../../views/Stack';
import SunLight from '../../components/SunLight';

export const Home = () => {
  const { currentProyectSelected } = useContext(CurrentProyectSelectedContext);

  return (
    // Screen
    <Box sx={{ height: '100%', width: '100%', position: 'relative', backgroundColor: 'rgb(15, 23, 42)' }}>
      {/* <SunLight /> */}
      {/* App */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          minHeight: 'calc(100vh - 160px)',
          padding: '55px 15px 0 15px',
          maxWidth: '1000px',
          margin: '0 auto',
          overflow: 'auto',
          '@media (min-width: 948px)': {
            height: 'calc(100vh - 60px)',
          },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', width: 'fit-content', height: '36px', alignItems: 'center' }}>
            <Typography sx={{ fontSize: '24px', color: 'white', fontWeight: '600' }}>Andrés Altamura</Typography>
            <Box
              sx={{
                borderRadius: '50%',
                width: '8px',
                height: '8px',
                backgroundColor: '#A3E635',
                margin: '4px 4px 0 10px',
              }}
            ></Box>
            <Typography sx={{ color: 'white', marginTop: '4px', fontSize: '14px', fontWeight: '600' }}>
              Disponible
            </Typography>
          </Box>

          <Typography sx={{ fontSize: '14px', color: 'white' }}>
            Transformo desafíos técnicos en aplicaciones intuitivas y confiables
          </Typography>
          <Typography sx={{ fontSize: '14px', color: 'white' }}>
            Trabajo actualmente como referente tecnológico en Koi ventures
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'center', gap: '25px' }}>
          <Experiences />
          <Stack />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
