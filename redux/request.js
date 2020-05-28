const axios = require('axios');


function fetchFactory(method, type, successType, failureType) {
  return async ({
    url, dispatch, urlData = {}, reduxData = {}
  }) => {
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
        ...urlData && { ...urlData }
      });
      const responseData = response.data;
      console.log('REDUX RESPONSE DATA:::', responseData);
      // Update payload in reducer on success
      const payload = Object.keys(reduxData).length ? reduxData : responseData;
      dispatch({
        type: successType,
        payload,
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
