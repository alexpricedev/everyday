import { expect } from 'chai';

import { cleanArray } from '../imports/helpers/clean-array';

const dirty = ['foo', 'bar', '', 'baz', , false];

describe('The cleanArray function', function() {
  const array = cleanArray(dirty);

  it('should remove any empty and falsy strings from the array', () => {
    expect(array.length).to.equal(3);
  });
});
