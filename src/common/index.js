export const roundNumber = (number) => {
  if (number !== undefined) return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
