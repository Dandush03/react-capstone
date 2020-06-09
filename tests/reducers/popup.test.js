import reducer from '../../src/reducers/popUp';
import * as types from '../../src/actions/actionsType';

describe('popUp reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual('');
  });

  it('should handle SHOW_POPUP', () => {
    expect(
      reducer([], {
        type: types.SHOW_POPUP,
        payload: {
          show: true,
          data: { name: 'test' },
        },
      }),
    ).toEqual(
      {
        data: {
          name: 'test',
        },
        show: true,
      },
    );
  });

  it('should handle SHOW_POPUP', () => {
    expect(
      reducer([], {
        type: types.CLOSE_POPUP,
        payload: {
          show: false,
          data: {},
        },
      }),
    ).toEqual(
      {
        data: {},
        show: false,
      },
    );
  });
});
