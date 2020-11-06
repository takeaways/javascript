import game from "./game";

describe("369 game", () => {
  it("game([1,2]) should return one,two", () => {
    expect(game([1, 2])).toBe("one,two");
  });

  it("game([1,2,3]) should return one,two,Boom", () => {
    expect(game([1, 2, 3])).toBe("one,two,Boom");
  });

  it("game([1,2,3,4,5,6]) should return one,two,Boom,four,five,Boom", () => {
    expect(game([1, 2, 3, 4, 5, 6])).toBe("one,two,Boom,four,five,Boom");
  });

  it("game([1,2,3,4,5,6]) should return one,two,Boom,four,five,Boom,seven,eight,Boom", () => {
    expect(game([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(
      "one,two,Boom,four,five,Boom,seven,eight,Boom"
    );
  });
});
