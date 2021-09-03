const calcul = require("./index");

test('adds 1 + 2 to equal 3', () => {
    expect(calcul([1,'+',2])).toBe(3)
  });

  
test('adds 2 -1 to equal 1', () => {
  expect(calcul([2,'-',1])).toBe(1)
});
test('adds 4*2 to equal 8', () => {
  expect(calcul([4,'*',2])).toBe(8)
});
test('adds 12/3 to equal 4', () => {
  expect(calcul([12,'/',3])).toBe(4)
});


