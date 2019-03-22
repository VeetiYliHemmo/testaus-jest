function pintaala(width, height = 0) {

    if(width === undefined) {
        throw new Error("ei parametreja");
    }

    const alue = Math.round(0.5 * Number(width) * Number(height) * 100) / 100;
    
    if(alue < 0) {
        throw new Error("negatiivinen luku");
    }
    return alue;
}
module.exports = pintaala;