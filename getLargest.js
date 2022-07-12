//Function

const getLargest = (a, b, c) => {
    //if Statement
    // if ( a > b && c) {
    //     return a;
    // } else if ( b > a && c ) {
    //     return b;
    // } else if (c > a && b ) {
    //     return c;
    // } else {
    //     return 'Values are the same';
    // }

    return Math.max(a,b,c);
}

//Export the function so it is avaiable to other files
module.exports = getLargest;
