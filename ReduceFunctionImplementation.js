function reduce(arr, reduceProcess, baseObject){
    let result = getBaseObject(arr, baseObject);
    arr = getObjectToIterateOver(arr, baseObject);

    arr.forEach(function(e, arr){
        result = reduceProcess(result, e);
    });
    return result;
}

function getBaseObject(arr, baseObject){
    if (baseObject === undefined) return arr[0];
    else return baseObject;
}

function getObjectToIterateOver(arr, baseObject){
    if (baseObject === undefined) return arr.slice(1);
    else return arr;
}

module.exports = reduce;