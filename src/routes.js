import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated } from './services/auth';
import SignUp from "./pages/SignUp";
import { GlobalStyle } from './styles/global';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>

            isAuthenticated() ? (

                <Component{...props} />
            ) : (
                    <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                )

        }

    />
);

const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/signup" component={SignUp}/>
        <Route path="/home" component={Home} />
        <Route path="/ranking" component={Home} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
      <GlobalStyle></GlobalStyle>
    </BrowserRouter>
);

export default Routes;