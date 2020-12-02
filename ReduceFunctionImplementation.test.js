const reduce = require('./ReduceFunctionImplementation');

test("when reduce is give a list with three numbers, successfully add them", () => {
    expect(reduce([1,2,10], function(sum, n){
        return sum + n;
    }, 0)).toBe(13);
});