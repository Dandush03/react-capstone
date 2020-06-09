import reducer from '../../src/reducers/loadData';
import * as types from '../../src/actions/actionsType';

describe('loadData reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual('');
  });

  it('should handle LOAD_COMPANIES_DATA', () => {
    expect(
      reducer([], {
        type: types.LOAD_COMPANIES_DATA,
        payload: {
          loadData: {
            firstCompany: { symbol: '', historical: [] },
            secondCompany: { symbol: '', historical: [] },
          },
        },
      }),
    ).toEqual(
      {
        loadData:
      {
        firstCompany:
        {
          historical: [],
          symbol: '',
        },
        secondCompany:
        {
          historical: [],
          symbol: '',
        },
      },
      },
    );
  });
});
