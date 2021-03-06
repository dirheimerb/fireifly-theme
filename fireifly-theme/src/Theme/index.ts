import breakpoints from './breakpoints';
import colors from './colors';
import radius from './radius';
import shadows from './shadows';
import sizes, { baseSizes } from './sizes';
import typography from './typography';
import zIndex from './zIndex';
import borders from './borders';
import transition from './transition';

const space = baseSizes;

const theme = {
  breakpoints,
  zIndex,
  radius,
  colors,
  ...typography,
  sizes,
  shadows,
  space,
  borders,
  transition
};

export type Theme = typeof theme;

export default theme;
