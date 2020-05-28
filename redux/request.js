const axios = require('axios');


function fetchFactory(method, type, successType, failureType) {
  return async (url, dispatch, data = {}) => {
    // Initiate loading state
    dispatch({
      type
    });
    try {
      // Call the API
      console.log('about to call api');
      const response = await axios({
        method,
        url,
        ...data && { ...data }
      });
      const responseData = response.data;
      console.log('REDUX DATA:::', data);
      // Update payload in reducer on success
      dispatch({
        type: successType,
        payload: responseData,
      });
    } catch (err) {
      // Update error in reducer on failure
      console.log('errr', err);
      dispatch({
        type: failureType,
        error: err
      });
    }
  };
}

function concatArgs(args) {
  const argsString = '?';
  const argsArray = Object.keys(args).map(argName => `${argName}=${args[argName]}`);
  return argsString + argsArray.join('&');
}

module.exports = {
  fetchFactory
};
