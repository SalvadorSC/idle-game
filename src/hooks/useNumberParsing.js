export const useNumberParsing = () => {
  const parseNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  return {
    parseNumber,
  };
};
