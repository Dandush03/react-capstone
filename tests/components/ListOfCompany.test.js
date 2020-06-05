import React from 'react';
import renderer from 'react-test-renderer';

import storeConfig from '../../src/store';
import ListOfCompany from '../../src/components/ListOfCompany';


const store = storeConfig();

describe('components', () => {
  describe('ListOfCompany', () => {
    const component = renderer.create(<ListOfCompany store={store} />);
    const tree = component.toJSON();
    it('Should match to Snapshot', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
