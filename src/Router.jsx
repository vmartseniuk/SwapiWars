import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { AppBar, Footer, ErrorBoundary } from "components";
import { Home } from "screens";

const Router = () => {
  return (
    <BrowserRouter>
      <AppBar />
      <ErrorBoundary>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </ErrorBoundary>
      <Footer />
      <Redirect to="/" />
    </BrowserRouter>
  );
};

export default Router;
