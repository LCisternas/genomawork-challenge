import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './state/store';

import Login from './components/Login';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import PrivateRoute from './components/PrivateRoute';
import UserProvider from './state/context/userContext';

import styled from 'styled-components';
const ContenedorApp = styled.div`
  height: 100vh;
  @media all and (max-width: 768px) {
    height: 200vh;
  }
`

function App() {
  return (
    <Provider store={store}>  
      <UserProvider>
        <BrowserRouter>
          <ContenedorApp>
            <Switch>
              <Route exact path="/" component={Login} />
              <PrivateRoute exact path='/home' component={Home} />
              <PrivateRoute exact path='/add' component={Add} />
              <PrivateRoute exact path={`/edit/:id`} component={Edit} />
            </Switch>
          </ContenedorApp>
        </BrowserRouter>
      </UserProvider>
    </Provider>
  );
}

export default App;
