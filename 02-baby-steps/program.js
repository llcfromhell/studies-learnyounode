var sum = process.argv.reduce(function(prev, curr, i, arr){
    
    if (i < 2) { return 0 };
    
    return +prev + +curr; 
    
});

console.log(sum);