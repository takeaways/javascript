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
      const threes = number.toString().match(/[3|6|9]/g);
      if (threes !== null) {
        let temp = "";
        for (let i = 0; i < threes.length; i++) {
          temp += "Boom";
          console.log(temp);
        }
        return temp;
      }
      return numberToEng[number];
    })
    .toString();
}
