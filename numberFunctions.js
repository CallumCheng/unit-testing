//Function

const getLargest = (a, b, c) => {
    return Math.max(a,b,c);
}

const getSmallest = (a, b, c) => {
    return Math.min(a, b, c)
}




//Export the function so it is avaiable to other files
module.exports = getLargest;