import reducer from '../../src/reducers/companies';
import * as types from '../../src/actions/actionsType';

describe('companies reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual('');
  });

  it('should handle LOAD_COMPANIES_DATA', () => {
    expect(
      reducer([], {
        type: types.LOAD_COMPANIES_DATA,
        payload: [{ name: 'test' }],
      }),
    ).toEqual(
      [],
    );
  });
});
