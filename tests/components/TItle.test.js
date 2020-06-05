import React from 'react';
import renderer from 'react-test-renderer';
import Title from '../../src/components/Title';

describe('Title', () => {
  test('Render Elements', () => {
    const component = renderer.create(<Title />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
