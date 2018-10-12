// string_calg.test.js
const calc = require('./string_calc');
test("{} = 0", () => { expect(calc("")).toBe(0);});