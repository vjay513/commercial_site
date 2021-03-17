import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import helpReducer from './help/help.reducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  help: helpReducer
});
