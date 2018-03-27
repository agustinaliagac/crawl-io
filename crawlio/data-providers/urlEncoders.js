var defaultURLEncoder = function (str) {
  return encodeURI(str);
};

var plusURLEncoder = function (str) {
  return str.replace(' ', '+');
};

module.exports = {
  defaultURLEncoder,
  plusURLEncoder,
};
