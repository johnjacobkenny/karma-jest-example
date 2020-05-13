describe("add", function () {
  test("should add positive numbers", function () {
    const result = add(1, 2);
    expect(result).toBe(3);
  });

  test("should add negative numbers", function () {
    const result = add(-1, -1);
    expect(result).toBe(-2);
  });
});
