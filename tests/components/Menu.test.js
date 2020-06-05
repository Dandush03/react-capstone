import React from 'react';
import renderer from 'react-test-renderer';
import Menu from '../../src/components/Menu';

describe('Menu', () => {
  test('Render Elements', () => {
    const component = renderer.create(<Menu />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
