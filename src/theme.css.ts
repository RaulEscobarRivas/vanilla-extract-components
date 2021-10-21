import { createGlobalTheme } from '@vanilla-extract/css';
import { theme as themeRaw } from './theme';

export const theme = createGlobalTheme(':root', themeRaw);