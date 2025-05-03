import { ACTION_TYPES } from '../../../constants';

const initialValues = {
  darktheme: false,
};

const darkThemeReducer = (state = initialValues, action) => {
  switch (action.type) {
    case ACTION_TYPES.DARK_THEME: {
      return {
        ...state,
        darktheme: action.payload,
      };
    }
    default:
      return state;
  }
};

export default darkThemeReducer;
