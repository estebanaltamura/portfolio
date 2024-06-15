import { Avatar, Box, Typography } from '@mui/material';
import { useContext } from 'react';
import { ModalContext } from '../contexts/ModalProvider';

interface IExperienceItemProps {
  logoImgSrc: string;
  name: string;
  period: string;
  role: string;
  index: number;
}

const ExperienceItem: React.FC<IExperienceItemProps> = ({ logoImgSrc, name, period, role, index }) => {
  const { triggerModal } = useContext(ModalContext);

  const experienceDetailClickHandler = () => {
    console.log('clickeo');
    triggerModal.experienceDetail(name);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '48px',
        marginTop: index > 0 ? '30px' : '0px',
        cursor: 'pointer',
        alignItems: 'center',
      }}
      onClick={experienceDetailClickHandler}
    >
      <Avatar src={logoImgSrc} sx={{ width: '40px', height: '40px', border: '1px solid rgba(255, 255, 255, 0.4)' }} />
      <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '17px' }}>
        <Typography sx={{ heigth: '24px', fontSize: '14px' }}>{`${name} | ${period}`}</Typography>
        <Typography sx={{ heigth: '24px', fontSize: '14px' }}>{role}</Typography>
      </Box>
    </Box>
  );
};

export default ExperienceItem;
