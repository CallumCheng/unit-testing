//Function

const getLargest = (a, b, c) => {
    if (a && b && c) {
        return Math.max(a,b,c);
    } else {
        throw "Error: all inputs must have a value";
    }
}

const getSmallest = (a, b, c) => {
    if (a && b && c) {
        return Math.min(a,b,c);
    } else {
        throw "Error: all inputs must have a value";
    }
}




//Export the function so it is avaiable to other files
module.exports = {
    getLargest,
    getSmallest
}
