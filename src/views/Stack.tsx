import { Icon } from '@iconify/react';
import { Box, Typography } from '@mui/material';
import { stack } from '../JSONs/JSONprojects';

const Stack = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '440px',
        height: 'fit-content',
        padding: '16px',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        color: 'white',
        overflow: 'hidden',
        position: 'relative',
        background: 'radial-gradient(circle, rgba(200,200,200,0.13) 10%, rgba(15, 23, 42,0.5) 80%)',
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
        <Typography sx={{ fontSize: '14px', color: 'white', marginLeft: '6px', opacity: '1', zIndex: '10' }}>
          Stack tecnológico
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          height: 'fit-content',
          gap: '10px',
          marginTop: '25px',
        }}
      >
        {stack.map((stackItem, index) => {
          return (
            <Box
              key={index}
              sx={{
                width: stackItem.doubleWidth ? 'calc(50% - 6.66px)' : 'calc(25% - 7.5px)', // Ajusta el ancho para 4 iconos por fila
                padding: '10px',
                borderRadius: '8px',
                boxShadow: '0px 0px 4px 0px rgba(255, 255, 255, 0.3)',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.3)', // Borde con color fijo
                '@media (min-width: 450px)': {
                  width: stackItem.doubleWidth ? 'calc(50% - 6.66px)' : 'calc(25% - 7.5px)', // Ajusta el ancho para 4 iconos por fila
                },
                '@media (min-width: 600px)': {
                  width: stackItem.doubleWidth ? 'calc(40% - 7.5px)' : 'calc(20% - 8px)', // Ajusta el ancho para 4 iconos por fila
                },
                '&:hover': {
                  animation: 'pulse 0.65s',
                  boxShadow: '0 0 0 0.3em transparent',
                },
              }}
            >
              <img src={stackItem.iconSrc} alt='' style={{ width: '100%', height: '100%' }} />
            </Box>
          );
        })}
      </Box>
      <style>
        {`
          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5); }
            100% { box-shadow: 0 0 0 0.3em rgba(255, 255, 255, 0); }
          }
        `}
      </style>
    </Box>
  );
};

export default Stack;
