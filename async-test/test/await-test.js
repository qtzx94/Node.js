const assert = require('assert');
const hello = require('../hello');

it('#async function', async () => {
    let r = await hello();
    assert.strictEqual(r, 15);
})