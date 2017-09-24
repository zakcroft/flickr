import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import App from './App/App'

if (module && module.hot) {
  module.hot.accept();
}

render(
  <App/>,
  document.getElementById('flickr-stream')
);

