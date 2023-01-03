import React, { Suspense, lazy, useEffect } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { DashboardPage } from "./pages/DashboardPage";
import Can from './config/Can';
import { connect } from 'react-redux'
import { Home } from "./modules/Home/Home";
const ECommercePage = lazy(() =>
  import("./modules/ECommerce/pages/eCommercePage")
);


const UserProfilepage = lazy(() =>
  import("./modules/UserProfile/UserProfilePage")
);

function BasePage(props) {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  useEffect(() => {
    // debugger;
    console.log(props.user)
  }, [])

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/home" />
        }
        <ContentRoute path="/home" component={Home} />
        {/* <ContentRoute path="/users" component={CustomersPage} /> */}
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <ContentRoute path="/builder" component={BuilderPage} />
        <Route path="/user-profile" component={UserProfilepage} />
        <Route path="/e-commerce" component={ECommercePage} />
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(BasePage)