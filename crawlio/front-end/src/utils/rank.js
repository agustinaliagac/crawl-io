const calcMedian = (values) => {
  values.sort((a, b) => a - b);
  const lowMiddle = Math.floor((values.length - 1) / 2);
  const highMiddle = Math.ceil((values.length - 1) / 2);
  return (values[lowMiddle] + values[highMiddle]) / 2;
};

const calcMinAndMax = (values) => {
  values.sort((a, b) => a - b);
  return {
    MIN: values[0],
    MAX: values[values.length - 1],
  };
};

/* eslint-disable no-return-assign, no-param-reassign */
const calcAverage = (values) => {
  const sum = values.reduce((previous, current) => {
    if (typeof current === 'number' && !Number.isNaN(current)) {
      current += previous;
    }
    return current;
  });
  return sum / values.length;
};

const STATIC_MULTIPLIERS = {
  TITLE: {
    CONTAINS_TERM: 0.9,
    DOES_NOT_CONTAIN_TERM: 0.3,
  },
};

const calcItemWeight = (searchTerm, item, positionalRef, MAX) => {
  let coeficient = 1;
  if (item.title && typeof item.title === 'string') {
    if (item.title.includes(searchTerm)) {
      coeficient *= STATIC_MULTIPLIERS.TITLE.CONTAINS_TERM;
    } else {
      coeficient *= STATIC_MULTIPLIERS.TITLE.DOES_NOT_CONTAIN_TERM;
    }
  }

  const { price } = item;
  const proximityMultiplier = price <= positionalRef ?
    price / positionalRef :
    (MAX - price) / (MAX - positionalRef);

  coeficient *= proximityMultiplier;

  return coeficient;
};

/*
* Simple algorithm that puts a weight value in each array item,
* so that we can sort items in a more useful way.
* Relevancy factors are closeness to median/avg values and title containing the keyword.
*/
export default (items, searchTerm) => {
  if (!items || !items.length) {
    return items;
  }
  const values = items.map(i => Number.parseFloat(i.price));
  const median = calcMedian(values);
  const avg = calcAverage(values);
  const { MAX } = calcMinAndMax(values);

  const positionalRef = (median + avg) / 2;

  items.forEach((item) => {
    item.weight = calcItemWeight(searchTerm, item, positionalRef, MAX);
  });

  items.sort((a, b) => b.weight - a.weight);

  return items;
};
