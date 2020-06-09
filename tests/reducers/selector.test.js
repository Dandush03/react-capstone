import reducer from '../../src/reducers/selector';
import * as types from '../../src/actions/actionsType';

describe('selector reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual('');
  });

  it('should handle first COMPANY_SELECTOR', () => {
    expect(
      reducer([], {
        type: types.COMPANY_SELECTOR,
        payload: {
          company: { name: 'test' },
          position: 'first',
        },
      }),
    ).toEqual(
      {
        first: {
          company: {
            name: 'test',
          },
        },
      },
    );
  });

  it('should handle second COMPANY_SELECTOR', () => {
    expect(
      reducer([], {
        type: types.COMPANY_SELECTOR,
        payload: {
          company: { name: 'test' },
          position: 'second',
        },
      }),
    ).toEqual(
      {
        second: {
          company: {
            name: 'test',
          },
        },
      },
    );
  });
});
