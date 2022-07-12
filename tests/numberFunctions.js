const each = require('jest-each').default;

const getLargest = require("../numberFunctions");

describe("numberFunctions", () => {

    test("getLargest is a funcnpm run testtion", () => {
        expect(typeof getLargest).toBe("function");
    })
    
   describe("It handles normal inputs successfully", () => {

        each([
            [[1,2,3], 3],
            [[9,8,7], 9],
            [[12,36,19], 36],
        ]).test("%s -> %s", (arr, expected) => {
            expect(getLargest(...arr)).toEqual(expected) //'...' is spread operator - used to expand/spread an array/iterator

        })
   })

})


