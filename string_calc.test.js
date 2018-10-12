// string_calg.test.js
const calc = require('./string_calc');
test("{} = 0", () => { expect(calc("")).toBe(0);});
test("1 = 1", () => { expect(calc("1")).toBe(1);});
test("1,1 = 2", () => { expect(calc("1,1")).toBe(2);});
test("1,1,1 = 3", () => { expect(calc("1,1,1")).toBe(3);});
test("1,1,1,1 = 4", () => { expect(calc("1,1,1,1")).toBe(4);});
test("1,1,1,1,1 = 5", () => { expect(calc("1,1,1,1,1")).toBe(5);});
test("1,1,1,1,1,1 = 6", () => { expect(calc("1,1,1,1,1,1")).toBe(6);});