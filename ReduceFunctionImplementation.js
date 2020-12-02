function reduce(arr, reduceProcess, baseObject){
    let result = baseObject;
    arr.forEach(function(e, arr){
        result = reduceProcess(result, e);
    });
    return result;
}

module.exports = reduce;