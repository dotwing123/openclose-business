import axios from 'axios';
import API_CONFIG from '../../config';
// import { getSecureData } from '../../utils';

// PATH VARIABLE REPLACER
function bindPath(url, pathVal) {
  let newUrl = url;
  const pathExpression = /:[a-z0-9]+/gi;
  let pathVar;
  while ((pathVar = pathExpression.exec(url)) !== null) {
    const pathVarName = pathVar[0];
    newUrl = newUrl.replace(pathVarName, pathVal[pathVarName.substring(1)]);
  }
  return newUrl;
}

// FUNCTION TO GET LANGUAGE FROM STORAGE OR DEFAULT TO DEVICE LANGUAGE
// const getLanguage = async () => {
//   try {
//     const storedLanguage = await AsyncStorage.getItem('appLanguage');
//     return storedLanguage || Localization.getLocales()[0].languageCode;
//   } catch (error) {
//     console.log('Error getting language:', error);
//     return 'en'; // Default fallback
//   }
// };

// AXIOS INTERCEPTOR SETUP
export default {
  setupInterceptors: (store) => {
    axios.interceptors.request.use(
      async function (config) {
        if (config.headers.isAuthRequired) {
        //   const secureData = await getSecureData();
        //   const token = secureData?.token;
        //   if (token) config.headers.Authorization = `Bearer ${token}`;
        }

        // List of APIs to exclude `lang` parameter
        // const lang = await getLanguage();
        if (!config.params) config.params = {};
        // if (!excludeLangApis.includes(config.url)) {
        //   config.params.lang = lang.startsWith('en') ? 'en' : lang;
        // }

        // Handle path variables
        if (config.headers.path) {
          try {
            config.url = bindPath(config.url, config.headers.path);
          } catch (e) {
            console.log('ERROR OCCURRED WHEN REPLACING PATH VARIABLES', e);
          }
        }
        config.baseURL = API_CONFIG.OC_APP_API_URL

        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    // RESPONSE INTERCEPTOR (Handles errors)
    axios.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        if (
          !axios.isCancel(error) &&
          (error.response?.status === 401 || error.response?.status === 403)
        ) {
          // navigation.navigate('sessionexpire');
          // store.dispatch(resetData());
          // store.dispatch(
          //   showSnackbar({
          //     showSnackbar: true,
          //     msg: 'Session expired please enter your pin!',
          //     variant: 'error',
          //   })
          // );
        }
        return Promise.reject(error);
      }
    );
  },
};
