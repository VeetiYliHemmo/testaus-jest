const divide = require("./osamaara");

test("suorittaa jakolaskun 4 / 2, tulos 2", () => {
    expect(divide(4, 2)).toBe(2);
});

test("syötteet numeromaisia merkkijonoja", () => {
    expect(divide("8", "2")).toBe(4);
});

test("syötteet merkkijonoja, heitetään poikkeus", () => {
    expect(() => {divide("kahdeksan", "kaksi")}).toThrow("ei lukuja");
});

test("parametrit puuttuvat, heitetään poikkeus", () => { 
    expect(() => {divide()}).toThrow("ei parametreja");
});

test("jaetaan nollalla, heitetään poikkeus", () => { 
    expect(() => {divide(3, 0)}).toThrow("nollalla jakaminen");
});