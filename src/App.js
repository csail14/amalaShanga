import "./App.css";
import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Paiment from "./screens/Basket/Paiement";
import Home from "./screens/Home/home";
import Header from "./components/header";
import Footer from "./components/footer";
import Yoga from "./screens/Yoga/yoga";
import Meditation from "./screens/Meditation/meditation";
import Other from "./screens/Other/Other";
import MyAccount from "./screens/Account/myAccount";
import Login from "./screens/Account/login";
import Register from "./screens/Account/register";
import Admin from "./screens/Admin/admin";
import Contact from "./screens/Contact/contact";
import RequireAuth from "./utils/require-auth";
import Logout from "./screens/Account/logout";
import Basket from "./screens/Basket/Basket";
import Studio from "./screens/Studio/Studio";
import Stage1 from "./screens/Other/OtherDetails";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={RequireAuth(Home, false)} />
          <Route exact path="/home" component={RequireAuth(Home, false)} />
          <Route
            exact
            path="/contact"
            component={RequireAuth(Contact, false)}
          />
          <Route exact path="/yoga" component={RequireAuth(Yoga, false)} />
          <Route exact path="/basket" component={Basket} />
          <Route exact path="/studio" component={RequireAuth(Studio, true)} />
          <Route
            exact
            path="/meditation"
            component={RequireAuth(Meditation, false)}
          />
          <Route exact path="/other" component={RequireAuth(Other, false)} />
          <Route
            exact
            path="/myAccount"
            component={RequireAuth(MyAccount, true)}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/stage" component={Stage1} />
          <Route exact path="/paiement" component={Paiment} />
          <Route exact path="/admin" component={RequireAuth(Admin, false)} />
          <Route exact path="/logout" component={Logout} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
