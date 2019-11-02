import React from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle} from './style.js'
import Header from './common/header/index';
import store from './store/index';

function App() {
  return (
    <div>
    <GlobalStyle></GlobalStyle>
    <Provider store={store}>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
    </Provider>
    </div>
  );
}

export default App;
