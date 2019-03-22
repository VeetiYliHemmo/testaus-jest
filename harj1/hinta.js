function hinta(price, tax = 21.0) {

    if(price === undefined) throw new Error("ei parametreja");

    price = Number(price);

    if(price > 500) {
        price *= 0.85;
    } else if(price > 200) {
        price *= 0.90;
    } else if(price >= 100) {
        price *= 0.95;
    }
    price *= 1 + (tax / 100);
    return price;
}
module.exports = hinta;