const ika = require('./harj1');

test("Onko henkilö (20) täysi-ikäinen", () => {
        expect(ika(20)).toBe(true);
});
test("Onko henkilö (18) täysi-ikäinen", () => {
        expect(ika(18)).toBe(true);
});
test("Onko henkilö (16) täysi-ikäinen", () => {
        expect(ika(16)).toBe(false);
});
test("Annetaan merkkijono syötteenä", () => {
        expect(ika("16")).toBe(false);
});
test("Ei anneta parametreja", () => {
        expect(() => { ika(); }).toThrow("ei parametreja");
});
test("Annetaan negatiivinen numero", () => {
        expect(ika(-5)).toBe(false);
});