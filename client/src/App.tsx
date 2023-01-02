const renderRoutes = require('react-router-config').renderRoutes;
const createBrowserHistory = require('history').createBrowserHistory;
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Actions} from './store';
import {createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import {getDesignTokens} from 'lib/themes';
import {SnackbarProvider} from 'notistack';
import {RootState} from 'store/reducers';
import cookie from 'cookie';
import {routes, adminRoutes} from 'routes';
import {Router, Route, Switch} from 'react-router-dom';
import AuthContext from 'store/auth-context';
import Login from 'pages/admin/login/Login';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

const history = createBrowserHistory();
const firebaseApp = firebase.initializeApp(firebaseConfig);

type Props = {
  children?: React.ReactNode;
  route?: any;
};

const App: React.FC<Props> = (props) => {
  const mode = useSelector((state: RootState) => state.Web.mode);
  const dispatch = useDispatch();
  const ctx = React.useContext(AuthContext);
  // useEffect(() => {
  //   console.log(ctx.isLoggedIn);
  //   if (ctx.isLoggedIn) {
  //     history.push('/admin');
  //   } else {
  //     history.push('/admin');
  //   }
  // }, [ctx.isLoggedIn]);

  // Get mode from cookie in the first access page
  useEffect(() => {
    const currentBrowserTheme =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)') ? 'light' : 'dark';
    dispatch(
      Actions.Web.update({
        key: 'mode',
        value: cookie.parse(document?.cookie)?.mode?.toString() || currentBrowserTheme,
      })
    );
  }, []);
  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Router history={history}>
          {history.location.pathname.includes('/admin') ? (
            <>
              {ctx.isLoggedIn && <Switch>{renderRoutes(adminRoutes)}</Switch>}
              {!ctx.isLoggedIn && <Login />}
            </>
          ) : (
            <Switch>{renderRoutes(routes)}</Switch>
          )}
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
