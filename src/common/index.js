export const getMainDataForSelectedCountry = (
  data,
  property,
  selectedCountryName
) => {
  return data[property].locations.find(
    country => country.country === selectedCountryName
  );
};

export const formatDate = timestamp => {
  console.log('timestamp', timestamp);
  if (timestamp !== undefined) {
    const year = timestamp.slice(0, 4);
    const month = timestamp.slice(5, 7);
    const day = timestamp.slice(8, 10);

    return `${day}/${month}/${year}`;
  }
};

export const formatTime = timestamp => {
  if (timestamp !== undefined) {
    const hour = timestamp.slice(11, 13);
    const minute = timestamp.slice(14, 16);
    const second = timestamp.slice(17, 19);

    return `${hour}:${minute}:${second}`;
  }
};

export const sortDataByDate = categoryData => {
  let sortedData = Object.keys(categoryData.history).map(key => ({
    date: key,
    number: categoryData.history[key],
  }));
  sortedData = sortedData.sort((a, b) => new Date(a.date) - new Date(b.date));
  sortedData = Object.values(sortedData);

  const sortedDates = sortedData.map(a => a.date);
  const sortedNumbers = sortedData.map(a => a.number);

  return [categoryData, sortedDates, sortedNumbers];
};

export const roundNumber = number => {
  if (number !== undefined && number !== null)
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const calculatePercentage = (totalValue, partialValue, toFixed = 2) => {
  const result = ((100 * partialValue) / totalValue).toFixed(toFixed);

  return parseFloat(result);
};

export const substractNumberWithPreviousNumberInArray = array => {
  return array.map((n, i) => {
    const itertator = i - 1;
    return n - array[itertator];
  });
};

export const calculateLast24HoursData = arrayOfNumbers => {
  return (
    arrayOfNumbers[arrayOfNumbers.length - 1] -
    arrayOfNumbers[arrayOfNumbers.length - 2]
  );
};
