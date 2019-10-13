const theme = {
  font: {
    family: {
      primary: '"Source Sans Pro", calibri',
      secondary: '"Crete Round", droid-serif',
    },
    size: {
      xl: 29,
      lg: 25,
      md: 21,
      sm: 18,
      xs: 15,
    },
  },
  palette: {
    primary: {
      main: '#3c78d8',
      light: '#5985d5',
      text: '#ffffff',
    },
    secondary: {},
    default: {
      main: '#f2f1f8',
      light: '#ffffff',
      text: '#000000',
    },
    score: {
      gold: '#d6af36',
      silver: '#a7a7ad',
      bronze: '#a77044',
    },
  },
  sizes: {
    width: {
      xl: 1000,
      lg: 900,
      md: 650,
      sm: 500,
    },
    header: 240,
    avatar: 140,
    input: 60,
    statusBar: 45,
    icon: 24,
  },
  spacing: {
    xl: 60,
    lg: 40,
    md: 20,
    sm: 12,
    xs: 8,
  },
  shape: {
    borderRadius: {
      lg: 12,
      md: 5,
      sm: 3,
    },
    shadow: {
      lg: `
        0 16px 24px 2px rgba(0, 0, 0, 0.05),
        0 6px 30px 5px rgba(0, 0, 0, 0.03),
        0 8px 10px -5px rgba(0, 0, 0, 0.07)
      `,
      md: `
        0 8px 12px 1px rgba(0, 0, 0, 0.03),
        0 3px 16px 2px rgba(0, 0, 0, 0.02),
        0 4px 6px -3px rgba(0, 0, 0, 0.04)
      `,
    },
  },
};

export default theme;
