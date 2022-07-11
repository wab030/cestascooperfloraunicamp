// https://stackoverflow.com/questions/66665969/expo-app-environments-for-dev-uat-and-production
import Constants from 'expo-constants';

const ENV = {
  dev: {
    FirebaseConfig: {
      apiKey: "AIzaSyB1WmY183fF2K3DgcHE4Vf8QAfimy1ofgg",
      authDomain: "cestascooperfloraunicamp-dev.firebaseapp.com",
      projectId: "cestascooperfloraunicamp-dev",
      storageBucket: "cestascooperfloraunicamp-dev.appspot.com",
      messagingSenderId: "835831029608",
      appId: "1:835831029608:web:40156970d95239f15d40dd"
    },
  },
  prod: {
    FirebaseConfig: {
      apiKey: "AIzaSyB1WmY183fF2K3DgcHE4Vf8QAfimy1ofgg",
      authDomain: "cestascooperfloraunicamp-dev.firebaseapp.com",
      projectId: "cestascooperfloraunicamp-dev",
      storageBucket: "cestascooperfloraunicamp-dev.appspot.com",
      messagingSenderId: "835831029608",
      appId: "1:835831029608:web:40156970d95239f15d40dd"
    },
  },
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  // What is __DEV__ ?
  // This variable is set to true when react-native is running in Dev mode.
  // __DEV__ is true when run locally, but false when published.
  if (__DEV__ || env === 'dev') {
    console.log('Dev environment');
    return ENV.dev;
  }
  console.log('Prod environment');
  return ENV.prod;
};

export default getEnvVars;
