const getFirstLetters = (str) => {
    const firstLetters = str
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();

    return firstLetters;
  };

export default getFirstLetters;