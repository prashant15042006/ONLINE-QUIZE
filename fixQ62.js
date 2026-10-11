const fs = require('fs');
let c = fs.readFileSync('src/data/madeEasyDemoTest.ts', 'utf8');
// Fix: x\\' -> x^{-1} (the apostrophe was terminating the single-quoted string in TS)
c = c.split("x\\\\' = \\\\frac{-x}{1+x}").join("x^{-1} = \\\\frac{-x}{1+x}");
fs.writeFileSync('src/data/madeEasyDemoTest.ts', c, 'utf8');
console.log('Fixed! Occurrences replaced:', (c.match(/x\^\{-1\}/g) || []).length);
