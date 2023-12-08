//NetworkService.js
//SECURITY REQUIREMENT FOR ALL FUTURE NETWORK REQUESTS FOR LEADER-BOARDS OR ADS
import { fetch } from 'react-native';

const makeSecureRequest = (url, options) => {
  //Ensure URL starts with https://
  const secureUrl = url.startsWith('https://') ? url : `https://${url}`;
  return fetch(secureUrl, options);
}

export default makeSecureRequest;