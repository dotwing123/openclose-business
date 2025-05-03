// ThemeContext.js
import React, { createContext, useContext, useState } from 'react';
import themes from './themeConfig';
import {useDispatch, useSelector} from 'react-redux'
import { setDarkTheme } from '../App/services/themechange/action';
const ThemeContext = createContext();
//custom hook theme
export const ThemeProvider = ({ children }) => {
  const isDarkTheme = useSelector((state) => state?.darkThemeReducer?.darktheme);
  const dispatch = useDispatch()
  const toggleTheme = () => {
    dispatch(setDarkTheme(isDarkTheme === true ? false : true));
  };

  return (
    <ThemeContext.Provider
      value={{ theme: isDarkTheme ? themes?.dark : themes?.light, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
