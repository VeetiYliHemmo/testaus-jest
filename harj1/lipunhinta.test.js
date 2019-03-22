const lipunhinta = require("./lipunhinta");

test("antaa 5-vuotiaan hinnan", () => {
    expect(lipunhinta(5)).toBe(0.00);
});

test("antaa 7-vuotiaan hinnan", () => {
    expect(lipunhinta(8)).toBe(1.00);
});

test("antaa 15-vuotiaan hinnan", () => {
    expect(lipunhinta(15)).toBe(1.00);
});

test("antaa 16-vuotiaan hinnan", () => {
    expect(lipunhinta(16)).toBe(1.50);
});

test("antaa 25-vuotiaan hinnan", () => {
    expect(lipunhinta(25)).toBe(1.50);
});

test("antaa 30-vuotiaan hinnan", () => {
    expect(lipunhinta(30)).toBe(3.00);
});

test("antaa 65-vuotiaan hinnan", () => {
    expect(lipunhinta(65)).toBe(3.00);
});

test("antaa 69-vuotiaan hinnan", () => {
    expect(lipunhinta(69)).toBe(1.50);
});

test("syötteet numeromaisia merkkijonoja", () => {
    expect(lipunhinta("18")).toBe(1.50);
});

test("parametrit puuttuvat, poikkeus", () => { 
    expect(() => {lipunhinta()}).toThrow("ei parametria");
});