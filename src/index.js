import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import {configureFakeBackend} from './service/fakeService';

import { store } from './store/configureStore';

configureFakeBackend();

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
document.getElementById('root'));
