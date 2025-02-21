"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPangram = void 0;
var isPangram = function (phrase) {
    var setData = new Set(phrase.toUpperCase());
    var data = Array.from(setData).join(' ');
    console.log(data);
    // const r = data.filter(item => {
    // })
    // return r.length - 1 >= 26 
    return true;
};
exports.isPangram = isPangram;
console.log((0, exports.isPangram)('The quick brown fox jumps over the lazy dog.'));
