import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import userReducer  from './user.reducer';

const rootReducer = combineReducers({
    userReducer,
    form: formReducer // <-- redux-form
});

export default rootReducer;