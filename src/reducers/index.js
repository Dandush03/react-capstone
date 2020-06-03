import { combineReducers } from 'redux';

import CompanyReducer from './companies';
import SelectorReducer from './selector';
import LoadDataReducer from './loadData';

export default combineReducers({
  companies: CompanyReducer,
  selector: SelectorReducer,
  loadData: LoadDataReducer,
});
