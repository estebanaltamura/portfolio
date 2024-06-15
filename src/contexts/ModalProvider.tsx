import { Box, Button, Typography } from '@mui/material';
import { ReactNode, createContext, useState } from 'react';
import { experiences } from '../JSONs/JSONprojects';

interface IModalContext {
  triggerModal: {
    experienceDetail: (name: string) => Promise<void>;
  };
}

const modalContextInitialValue = {
  triggerModal: {
    experienceDetail: (name: string) => Promise.resolve(),
  },
};

export const ModalContext = createContext(modalContextInitialValue);

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [experienceName, setModalExperienceName] = useState<string | null>(null);
  const [experienceRole, setExperienceRole] = useState<string | null>(null);
  const [experienceDetails, setModalExperienceDetails] = useState<string[] | null>(null);

  const triggerModal = {
    experienceDetail: (name: string) => {
      return new Promise<void>((resolve) => {
        const specificExperience = experiences.find((experience) => experience.name === name);
        if (!specificExperience) throw new Error('Experience detail is missing');
        const { details: experienceDetails, role } = specificExperience;

        console.log(experienceDetails, role, specificExperience);

        setModalExperienceName(name);
        setExperienceRole(role);
        setModalExperienceDetails(experienceDetails);
        setOpenModal(true);
        resolve();
      });
    },
  };

  const okClickHandler = () => {
    setOpenModal(false);
  };

  return (
    <ModalContext.Provider value={{ triggerModal }}>
      {children}
      {openModal && (
        <Box
          sx={{
            position: 'fixed',
            display: 'flex',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            padding: '15px',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 1000,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '450px',
              height: 'fit-content',
              maxHeight: '550px',
              padding: '20px 40px',
              borderRadius: '16px',
              border: '1px solid black',
              backgroundColor: 'white',
              overflow: 'hidden',
            }}
          >
            {/*name*/}
            <Box sx={{ width: '100%', marginBottom: '10px' }}>
              <Typography
                sx={{
                  textAlign: 'center',
                  fontSize: '22px',
                  lineHeight: '30px',
                  height: 'fit-content',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  wordBreak: 'break-word',
                }}
              >
                {experienceName}
              </Typography>
            </Box>

            {/*role*/}
            <Box sx={{ width: '100%', marginBottom: '10px' }}>
              <Typography
                sx={{
                  textAlign: 'center',
                  fontSize: '16px',
                  lineHeight: '20px',
                  height: 'fit-content',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: 'vertical',
                  wordBreak: 'break-word',
                }}
              >
                {experienceRole}
              </Typography>
            </Box>

            {/*Detail*/}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                flexGrow: 1,
                overflowY: 'auto',
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
              {experienceDetails &&
                experienceDetails.map((experienceDetail, index) => (
                  <Typography
                    key={index}
                    sx={{
                      fontSize: '16px',
                      lineHeight: '28px',
                      marginTop: index > 0 ? '15px' : 0,
                    }}
                  >
                    {experienceDetail}
                  </Typography>
                ))}
            </Box>

            {/*Buttons container */}
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                height: '43px',
                justifyContent: 'center',
                gap: '20px',
                marginTop: '10px',
              }}
            >
              <Button
                onClick={okClickHandler}
                sx={{
                  height: '43px',
                  width: '125px',
                  borderRadius: '8px',
                  backgroundColor: '#005575',
                  color: 'white',
                }}
              >
                OK
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
