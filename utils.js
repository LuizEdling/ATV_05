 module.exports = function (){
    const min = 1;
    const max = 10;
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
}
