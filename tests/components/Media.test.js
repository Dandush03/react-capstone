import React from 'react';
import renderer from 'react-test-renderer';
import Media from '../../src/components/Media';

describe('Media', () => {
  test('Render Elements', () => {
    const component = renderer.create(<Media />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
