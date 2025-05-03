// Light theme colors
export const lightTheme = {
    name: 'light',
    colors: {
      primary: {
        main: '#09CD99',
        light: '#957fc1',
        dark: '#35009F',
      },
      secondary: {
        main: '#333333',
        light: '#5B5B5B',
        dark: '#09ABB1',
      },
      tertiary: {
        main: '#FFFEFE',
        light: '#DDDDDD',
        dark: '#FFEFEF',
      },
      warning: '#F20303',
      success: '#00C27B',
      background: '#FFFFFF',
      text: {
        primary: '#010101',
        secondary: '#FFFEFE',
        tertiary_1: '#727272',
        tertiary_2: '#C3C3C3',
      },
      button: '#BB86FC',
    },
    fonts: {
      h1: 24,
      h2: 18,
      h3: 16,
      p: 15,
      subtitle1: 14,
      subtitle2: 12,
      body1: 10,
    },
    fontFamily: {
      light: 'Manrope-Light',
      regular: 'Manrope-Regular',
      medium: 'Manrope-Medium',
      semiBold: 'Manrope-SemiBold',
      bold: 'Manrope-Bold'
    }
  };
  
  // Dark theme colors
  export const darkTheme = {
    name: 'dark',
    colors: {
      primary: {
        main: '#09CD99',
        light: '#957fc1',
        dark: '#35009F',
      },
      secondary: {
        main: '#333333',
        light: '#FFF',
        dark: '#09ABB1',
      },
      tertiary: {
        main: '#FFFEFE',
        light: '#DDDDDD',
        dark: '#FFEFEF',
      },
      warning: '#F20303',
      success: '#00C27B',
      background: '#2A2929',
      text: {
        primary: '#FFFFFF',
        secondary: '#FFFFFF',
        tertiary_1: '#FFFFFF',
        tertiary_2: '#C3C3C3',
      },
      button: '#BB86FC',
    },
    fonts: {
      h1: 20,
      h2: 18,
      h3: 16,
      p: 15,
      subtitle1: 14,
      subtitle2: 12,
      body1: 10,
    },
    fontFamily: {
      light: 'Manrope-Light',
      regular: 'Manrope-Regular',
      medium: 'Manrope-Medium',
      semiBold: 'Manrope-SemiBold',
      bold: 'Manrope-Bold'
    }
  };
  
  const themes = {
    light: lightTheme,
    dark: darkTheme,
  };
  
  export default themes;
  