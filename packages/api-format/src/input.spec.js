// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const { formatInputs } = require('./index');

describe('formatInputs', () => {
  it('formats each value in an array', () => {
    expect(
      formatInputs(
        [
          { name: 'foo', type: 'Address' },
          { name: 'bar', type: 'H256' }
        ],
        ['0x1234', '0xabcd']
      )
    ).toEqual([
      '0x1234',
      '0xabcd'
    ]);
  });
});