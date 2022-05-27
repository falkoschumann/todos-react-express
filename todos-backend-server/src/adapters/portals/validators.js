var http2 = require('http2');

function isJson(req, res) {
  if (req.headers['content-type'] !== 'application/json') {
    res
      .status(http2.constants.HTTP_STATUS_UNSUPPORTED_MEDIA_TYPE)
      .send('Content type must be application/json.');
    return false;
  } else {
    return true;
  }
}

function hasProperty(propertyName, req, res) {
  if (req.body[propertyName] == null) {
    res
      .status(http2.constants.HTTP_STATUS_UNPROCESSABLE_ENTITY)
      .send(`Missing property "${propertyName}" in request body.`);
    return false;
  } else {
    return true;
  }
}

function hasPropertyType(propertyName, propertyType, req, res) {
  if (typeof req.body[propertyName] !== propertyType) {
    res
      .status(http2.constants.HTTP_STATUS_UNPROCESSABLE_ENTITY)
      .send(`Property "${propertyName}" in request body must be ${propertyType} value.`);
    return false;
  } else {
    return true;
  }
}

const utils = {
  isJson,
  hasProperty,
  hasPropertyType,
};

module.exports = utils;
