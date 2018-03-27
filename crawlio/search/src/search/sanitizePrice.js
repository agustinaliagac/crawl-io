var sanitizePrice = function (price) {
  if (!price) {
    return '';
  }
  // Clear non-numeric characters (but not dots and commas)
  const stripped = (price).toString().replace(/[^0-9.,]/g, '');
  // Remove decimals
  let split = stripped.split(/[,.]/);
  if (split.length > 1 && split[split.length - 1].length < 3) {
    split.splice(split.length - 1, 1);
  }
  // Remove remaining dots and commas
  const finalString = split.join().replace(/[.,]/, '');

  return finalString;
};

module.exports = sanitizePrice;
