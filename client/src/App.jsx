import { ChakraProvider } from '@chakra-ui/react';
import { ROUTERS } from 'configs/routes';
import store, { history } from 'configs/store';
import theme from 'configs/theme';
import { ConnectedRouter as Router } from 'connected-react-router';
import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            {ROUTERS.map((item, index) => (
              <Route
                path={item.path}
                name={item.name}
                exact={item.exact}
                component={item.component}
                key={index}
              />
            ))}
          </Switch>
        </Router>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
