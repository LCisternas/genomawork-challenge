import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './state/store';

import styled from 'styled-components';

import Login from './components/Login';
import Home from './components/Home';
import Add from './components/Add';
import PrivateRoute from './components/PrivateRoute';
import UserProvider from './state/context/userContext';

const ContenedorApp = styled.div`
  height: 100vh;
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
              <PrivateRoute  exact path='/add' component={Add} />
            </Switch>
          </ContenedorApp>
        </BrowserRouter>
      </UserProvider>
    </Provider>
  );
}

export default App;
