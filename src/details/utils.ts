const getColumnsNumber = (number: number) => {
  switch (number) {
    case 4:
      return 3;
    case 3:
      return 4;
    case 2:
      return 6;
    default:
      return 12;
  }
};

export default getColumnsNumber;
