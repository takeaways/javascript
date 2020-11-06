export default function game(arr) {
  const numberToEng = {
    [1]: "one",
    [2]: "two",
    [3]: "three",
    [4]: "four",
    [5]: "five",
    [6]: "six",
    [7]: "seven",
    [8]: "eight",
    [9]: "nine",
  };

  return arr
    .map((number) => {
      if (number % 3 === 0) {
        return "Boom";
      }
      return numberToEng[number];
    })
    .toString();
}
