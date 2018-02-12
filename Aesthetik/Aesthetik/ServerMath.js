module.exports = function (callback, a, b){
    var result = "Result froim Server js:" + a * b;
    callback(null, result);
}