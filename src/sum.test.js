// file: sum.test.js

import sum from './sum';

it('should sum 2 numbers', () => {
    const result = sum(1, 2);

    expect(result).toBe(3);
});

// file: sum.test.js
it('should sum 2 numbers snapshot', () => {
    expect(sum(1, 2)).toMatchSnapshot();
});