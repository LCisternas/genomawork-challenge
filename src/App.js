import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Login from './components/Login';
import Home from './components/Home';
import Add from './components/Add';

const ContenedorApp = styled.div`
  height: 100vh;
`

function App() {
  return (
    <BrowserRouter>
      <ContenedorApp>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/add" component={Add} />
        </Switch>
      </ContenedorApp>
    </BrowserRouter>
  );
}

export default App;
