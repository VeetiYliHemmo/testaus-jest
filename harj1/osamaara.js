function divide(a, b = 1) {
    if(a === undefined) {
        throw new Error("ei parametreja");
    }
    const castedA = Number(a);
    const castedB = Number(b);
    if(castedB === 0) {
        throw new Error("nollalla jakaminen");
    }
    const result = castedA / castedB;
    if(isNaN(result)) {  
        throw new Error("ei lukuja");
    }
    return result;
}
module.exports = divide;