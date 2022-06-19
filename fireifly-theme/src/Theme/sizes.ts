export interface Basesize {
  px: string;
  '0': string;
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  '6': string;
  '8': string;
  '10': string;
  '12': string;
  '16': string;
  '20': string;
  '24': string;
  '32': string;
  '40': string;
  '48': string;
  '56': string;
  '64': string;
}
export interface lgSize {
  full: string;
  '3xs': string;
  '2xs': string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
  '6xl': string;
  '7xl': string;
}
export interface Container {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface Sizes {
  base: Basesize;
  lgSize: lgSize;
  Container: Container;
}
export const baseSizes: Basesize = {
  px: '1px',
  '0': '0',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '32': '8rem',
  '40': '10rem',
  '48': '12rem',
  '56': '14rem',
  '64': '16rem'
};

const largeSizes: lgSize = {
  full: '100%',
  '3xs': '14rem',
  '2xs': '16rem',
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
  '7xl': '80rem'
};

const container: Container = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px'
};

const sizes: Sizes = {
  base: baseSizes,
  lgSize: largeSizes,
  Container: container
};

export default sizes;
