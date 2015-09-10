describe("countUpTo", function() {
  it("will return an array of given numbers", function() {
    expect(countUpTo(2,4)).to.eql([2,4]);
  });

  it("will return an array of multiples of the counter up to a larger number", function() {
    expect(countUpTo(5, 101)).to.eql([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100])
  });
});
