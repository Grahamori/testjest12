/**
 * @jest-environment jsdom
 */

/* Test ideas
1. Test for no params
2. Test for missing params
3. String as one or both params
4. Null as one or both params
5. Undefined as one or both params
6. Floating  point numbers works
7. Do negative numbers work
*/


const { TestScheduler } = require("jest");
const addition = require("../scripts/calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 52 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 73 for 42 + 31", () => {
            expect(addition(42, 31)).toBe(73);
        });
    });
    describe("Subtraction function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Division function", () => {

    });
})