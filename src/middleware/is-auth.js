const jwt = require('jsonwebtoken');

exports.validateUser = (authHeader) => {
  const response = { isAuth: false, level: 0, _id: ''};
  if (!authHeader) {
    return response;
  }
  const token = authHeader.split(' ')[1];
  if (!token || token === '') {
    return response;
  }
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, 'UNSAFE_STRING');
    console.log('=====', decodedToken);
    response.isAuth = true;
    response.level = decodedToken.level;
    response._id = decodedToken._id;
  } catch (err) {
    return response;
  }
  if (!decodedToken) {
    return response;
  }
  return response;
};
