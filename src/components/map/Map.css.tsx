import { style, keyframes } from '@vanilla-extract/css';
import { SCREEN_BELOW_SM, SCREEN_SM_MD, SCREEN_MD } from '../../constants/media';
import { theme } from '../../theme.css';

export const controlsWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@media': {
    [SCREEN_BELOW_SM]: {
      padding: '16px',
    },
    [SCREEN_SM_MD]: {
      padding: '18px',
    },
    [SCREEN_MD]: {
      padding: '20px',
    }
  },
});

export const pulseKeyframes = keyframes({
  "0%, 100%": {
    opacity: 1,
  },
  "50%": {
    opacity: .5,
  }
});

export const loadingMapStyle = style({
  width: "100%",
  height: "100%",
  background: theme.color.gray[300],
  animation: `${pulseKeyframes} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
});
