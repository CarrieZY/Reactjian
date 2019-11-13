import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GlobalStyle} from './style.js'
import Header from './common/header/index';
import store from './store/index';
import Home from './pages/Home/Home'
import Detail from './pages/Detail/Detail'
import login from './pages/login/index';

function App() {
  return (
    <div>
    <GlobalStyle></GlobalStyle>
    <Provider store={store}>
      <div>
      <BrowserRouter>
      {/* 表示这里的内容要使用路由了 */}
      <Header></Header>
      <Route path='/' exact component={Home}></Route>
      <Route path='/login' exact component={login}></Route>
      <Route path='/detail/:id' component={Detail}></Route>
      </BrowserRouter>
      <GlobalStyle></GlobalStyle>
      </div>
    </Provider>
    </div>
  );
}

export default App;
