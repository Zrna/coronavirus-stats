export const roundNumber = (number) => {
  if (number !== undefined) return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatDate = timestamp => {
  if (timestamp !== undefined) {
    const year = timestamp.slice(0, 4);
    const day = timestamp.slice(5, 7);
    const month = timestamp.slice(8, 10);

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

export const sortDataByDate = (categoryData) => {
  if (categoryData.history !== undefined) {
    let sortedData = Object.keys(categoryData.history).map(key => ({date: key, number: categoryData.history[key]}));
    sortedData = sortedData.sort((a,b)=> new Date(a.date) - new Date(b.date));
    sortedData = Object.values(sortedData);

    const sortedDates = sortedData.map(a => a.date);
    const sortedNumbers = sortedData.map(a => a.number);

    return [sortedData, sortedDates, sortedNumbers];
  }
};


export const calculatePercentage = (totalValue, partialValue, toFixed) => {
  return ((100 * partialValue) / totalValue).toFixed(toFixed) + '%';
};

export const substractNumberWithPreviousNumberInArray = array => {
  return array.map((n, i) => {
    const itertator = i - 1;
    return n - array[itertator];
  });
};
