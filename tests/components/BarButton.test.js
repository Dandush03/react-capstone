import React from 'react';
import renderer from 'react-test-renderer';
import BarButton from '../../src/components/BarButton';

describe('BarButton', () => {
  test('Render Elements', () => {
    const component = renderer.create(<BarButton />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
