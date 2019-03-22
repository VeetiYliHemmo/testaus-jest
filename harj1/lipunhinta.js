    function lipunhinta(ikä) {

    if(ikä === undefined) {
        throw new Error("ei parametria");
    }

    const ikäluku = Number(ikä);

    if(ikäluku < 7) {
        return 0.00;
    } else if(ikäluku < 16) {
        return 1.00;
    } else if(ikäluku <= 25) {
        return 1.50;
    } else if(ikäluku <= 65) {
        return 3.00;
    } else {
        return 1.50
    }
}
module.exports = lipunhinta;