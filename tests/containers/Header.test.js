import React from 'react';
import renderer from 'react-test-renderer';

import { Provider } from 'react-redux';
import storeConfig from '../../src/store';
import Header from '../../src/containers/Header';


const store = storeConfig();

describe('components', () => {
  describe('Header', () => {
    const component = renderer.create(<Provider store={store}><Header /></Provider>);
    const tree = component.toJSON();
    it('Should match to Snapshot', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
