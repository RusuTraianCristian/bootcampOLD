// Immediately Invoked Function Expression (IIFE)
(function() {
    return x * x;
}());
// Function Declaration
function square(x) {
    return x * x;
}
// Function Expression
const square = function(x) {
    return x * x;
}
// Arrow Function Expression
const square = (x) => {
    return x * x;
}
// Concise Arrow Function Expression
const square = x => x * x;
