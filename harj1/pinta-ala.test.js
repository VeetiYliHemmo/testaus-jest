const pintaala = require("./pinta-ala");

test("Kolmion 5 x 2 pinta-ala", () => { 
    expect(pintaala(5, 2)).toBe(5);
});
test("annetaan negatiivinen parametri", () => { 
    expect(() => {pintaala(-10, 2)}).toThrow("negatiivinen luku");
});

test("syötteet numeromaisia merkkijonoja", () => {
    expect(pintaala(10, 5)).toBeCloseTo(25);
});

test("annetaan vain yksi parametri", () => {
    expect(pintaala(5)).toBe(0);
});

test("parametrit puuttuvat, poikkeus", () => { 
    expect(() => {pintaala()}).toThrow("ei parametreja");
}) ;