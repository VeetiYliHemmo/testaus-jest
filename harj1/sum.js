function sum(a, b=0) {
    if(a === undefined || a === null){
        throw new Error('ei parametreja');
    }
    const result = Number(a) + Number(b);
    console.log(result);
    if(Number.isNaN(result)){
        throw new Error('ei lukuja');
    }
    return result;
}   
module.exports = sum;