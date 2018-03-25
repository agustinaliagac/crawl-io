/* eslint-disable no-plusplus, no-param-reassign, import/prefer-default-export, no-console */

const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const toObject = (array, keyProperty) => {
  const obj = {};
  array.forEach((item) => {
    if (typeof item === 'string') {
      obj[item] = item;
    } else if (typeof item === 'object') {
      const keys = keyProperty.split('.');
      let objKey = item;
      keys.forEach((i) => {
        objKey = objKey[i];
      });
      obj[objKey] = item;
    }
  });

  console.log(array, obj);
  return obj;
};

export {
  shuffle,
  toObject,
};
