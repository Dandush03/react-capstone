import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import storeConfig from '../../src/store';
import ListOfCompany from '../../src/components/ListOfCompany';


const store = storeConfig();

describe('components', () => {
  describe('ListOfCompany', () => {
    const component = renderer.create(<Provider store={store}><ListOfCompany /></Provider>);
    const tree = component.toJSON();
    it('Should match to Snapshot', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
