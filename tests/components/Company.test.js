import React from 'react';
import renderer from 'react-test-renderer';

import storeConfig from '../../src/store';
import Company from '../../src/containers/Company';


const store = storeConfig();

describe('components', () => {
  describe('Company', () => {
    const component = renderer.create(<Company store={store} />);
    const tree = component.toJSON();
    it('Should match to Snapshot', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
