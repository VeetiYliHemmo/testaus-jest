const hinta = require("./hinta");

test("laskee hinnan 5€ ja 21% alv", () => {
    expect(hinta(5, 21)).toBeCloseTo(6.05);
});

test("laskee hinnan 200€ ja 25% alv", () => {
    expect(hinta(200, 50)).toBeCloseTo(285);
});

test("laskee hinnan 400€ ja 10% alv", () => {
    expect(hinta(400, 10)).toBeCloseTo(396);
});

test("laskee hinnan 1000€ ja 5% alv", () => {
    expect(hinta(1000, 5)).toBeCloseTo(892.5);
});

test("laskee hinnan 450€ ja 10% alv", () => {
    expect(hinta(450, 10)).toBeCloseTo(445.5);
});

test("parametrit puuttuvat, heitetään poikkeus", () => { 
    expect(() => {hinta()}).toThrow("ei parametreja");
});