import { Box } from '@mui/material';

const SunLight = () => {
  return (
    <Box sx={{ position: 'absolute', height: '100%', width: '100%', pointerEvents: 'none' }}>
      <svg
        width='100%'
        height='100%'
        viewBox='0 0 3728 2021'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='xMidYMid meet'
      >
        <g opacity='0.6'>
          <g filter='url(#filter0_f_404_2)'>
            <path
              d='M2327.96 355.559C2629.68 699.088 2635.89 689.016 3026.97 811.046C3220.74 871.509 2761.92 1210.64 2544.27 936.905C2485.59 801.899 2257.08 514.064 2007.38 795.434C1753.84 1081.11 2130.64 175.167 1397 734.31C1616.34 472.816 2062.62 53.4451 2327.96 355.559Z'
              fill='url(#paint0_linear_404_2)'
            />
          </g>
        </g>
        <defs>
          <filter
            id='filter0_f_404_2'
            x='1147'
            y='0.491943'
            width='2176.61'
            height='1291.77'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
            <feGaussianBlur stdDeviation='125' result='effect1_foregroundBlur_404_2' />
          </filter>
          <linearGradient
            id='paint0_linear_404_2'
            x1='3201.77'
            y1='802.42'
            x2='2116.86'
            y2='-171.011'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#20145E' />
            <stop offset='0.40625' stopColor='#66E3FF' />
            <stop offset='0.898799' stopColor='#1E1C7D' />
          </linearGradient>
        </defs>
      </svg>
    </Box>
  );
};

export default SunLight;
