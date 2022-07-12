const each = require('jest-each').default;

const { expect } = require('expect');
const { getLargest, getSmallest } = require("../numberFunctions");

describe("getLargest", () => {

    test("It is a function", () => {
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

describe("getSmallest", () => {

    test("It is a function", () => {
        expect(typeof getSmallest).toBe("function");
    })
    
   describe("It handles normal inputs successfully", () => {

        each([
            [[1,2,3], 1],
            [[9,8,7], 7],
            [[12,36,19], 12],
        ]).test("%s -> %s", (arr, expected) => {
            expect(getSmallest(...arr)).toEqual(expected) //'...' is spread operator - used to expand/spread an array/iterator

        })
   })

})
