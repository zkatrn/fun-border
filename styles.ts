import { styled } from '@stitches/react';

export const StyledFunBorder = styled('div', {
  width: '100%',
  position: 'relative',

  '& > *': {
    position: 'relative',
    zIndex: 3,
    color: '#ffffff',
  },

  '&::before': {
    content: "''",
    position: 'absolute',
    top: '-2px',
    left: '-2px',
    right: '-2px',
    bottom: '-2px',
    zIndex: 1,
    background:
      'linear-gradient(to right, rgb(119, 251, 203), rgb(191, 24, 248), rgb(224, 220, 134), rgb(99, 204, 255), rgb(201, 220, 148), rgb(153, 217, 185), rgb(178, 217, 172), rgb(27, 220, 250), rgb(38, 220, 243), rgb(19, 219, 255), rgb(255, 0, 255))',
    WebkitAnimation: 'neonBorder 5s ease-in-out infinite',
    animation: 'neonBorder 5s ease-in-out infinite',
  },
  '&::after': {
    content: "''",
    position: 'absolute',
    inset: '0',
    zIndex: 1,
    backgroundColor: 'black',
  },
});
