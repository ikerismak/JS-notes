const { promedio,sumar,restar } = require("./calculadora");

test("promedio", () => {
  expect(promedio(2, 2, 2)).toBe(2);
});


test("suma", () => {
    expect(sumar(2, 2)).toBe(4);
  });

test("resta", () => {
    expect(restar(2,1)).toBe(1);
});
