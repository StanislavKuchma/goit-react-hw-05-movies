export const theme = Object.freeze({
  colors: {
    accent: '#f64f59',
    white: '#ffffff',
    light: 'rgba(255,255,255,.5)',
    dark: '#240b01',
    primary: '#22a6b3',
    mainBackground: ['linear-gradient(to top, #0f2027, #90f0ff, #2c5364)'],
    imageBackground: ['red', 'linear-gradient (90deg, #ff9966,#ff5e62'],
  },
  fontSizes: {
    small: '18px',
    medium: '22px',
    large: '30px',
    xl: '30px',
    xxl: '34px',
    xxxl: '42px',
  },
  breakpoints: {
    xs: '320px',
    s: '768px',
    m: '1024px',
    l: '1280px',
    xl: '1440px',
  },
  animations: {
    cubicBezier: 'cubic-bezier(0, 0.110, 0.35, 2);',
  },
  spacing: {
    step: 4,
  },
});
