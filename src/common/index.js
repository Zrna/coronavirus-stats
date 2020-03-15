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
