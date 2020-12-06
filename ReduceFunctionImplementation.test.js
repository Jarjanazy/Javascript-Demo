const reduce = require('./ReduceFunctionImplementation');

test("when reduce is give a list with three numbers and an initial value successfully add them", () => {
    expect(reduce([1,2,10], function(sum, n){
        return sum + n;
    }, 0)).toBe(13);
});


test("when reduce is give a list with three numbers and no inital value, successfully add them", () => {
    expect(reduce([1,3,10], function(sum, n){
        return sum + n;
    })).toBe(14);
});