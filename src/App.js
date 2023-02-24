import "./App.css";
import React, { useEffect } from "react";
import { CloudinaryContext } from "cloudinary-react";
import { Switch, Route, useLocation } from "react-router-dom";
import Paiment from "./screens/Basket/Paiement";
import Home from "./screens/Home/home";
import Header from "./components/header";
import Footer from "./components/footer";
import Yoga from "./screens/Yoga/yoga";
import CGU from "./screens/Legal/cgu";
import CGV from "./screens/Legal/cgv";
import Meditation from "./screens/Meditation/meditation";
import Other from "./screens/Other/Other";
import MyAccount from "./screens/Account/myAccount";
import NonAuth from "./screens/Admin/NonAuth";
import Login from "./screens/Account/login";
import Register from "./screens/Account/register";
import Admin from "./screens/Admin/admin";
import Contact from "./screens/Contact/contact";
import RequireAuth from "./utils/require-auth";
import Logout from "./screens/Account/logout";
import Basket from "./screens/Basket/Basket";
import Studio from "./screens/Studio/Studio";
import Stage1 from "./screens/Other/OtherDetails";
import StageGrece from "./screens/Other/StageGrece";
import PaymentSuceed from "./screens/Basket/PaymentSucced";
import ForgotPassWord from "./screens/Account/forgotPassword";
import ChangePassword from "./screens/Account/ChangePassword";
import StageGretz from "./screens/Other/StageGretz";
import StageGretz2 from "./screens/Other/StageGretz2";
function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <CloudinaryContext cloudName="dmrjwfy5m">
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
            <Route exact path="/cgu" component={RequireAuth(CGU, false)} />
            <Route exact path="/cgv" component={RequireAuth(CGV, false)} />
            <Route
              exact
              path="/basket"
              component={RequireAuth(Basket, false)}
            />
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
            <Route exact path="/forgot-password" component={ForgotPassWord} />
            <Route
              exact
              path="/changePassword/:key_id"
              component={ChangePassword}
            />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/stage" component={RequireAuth(Other, false)} />
            <Route
              exact
              path="/stage1"
              component={RequireAuth(Stage1, false)}
            />
            <Route
              exact
              path="/stage-gretz"
              component={RequireAuth(StageGretz, false)}
            />
            <Route
              exact
              path="/stage-gretz2"
              component={RequireAuth(StageGretz2, false)}
            />
            <Route
              exact
              path="/stage2"
              component={RequireAuth(StageGrece, false)}
            />
            <Route
              exact
              path="/non-authorize"
              component={RequireAuth(NonAuth, false)}
            />
            <Route
              exact
              path="/paiement-succeed"
              component={RequireAuth(PaymentSuceed, false)}
            />
            {/* <Route
              exact
              path="/paiement-test"
              component={RequireAuth(PaymentTest, true)}
            /> */}
            <Route exact path="/paiement" component={Paiment} />
            <Route
              exact
              path="/admin"
              component={RequireAuth(Admin, true, true)}
            />
            <Route exact path="/logout" component={Logout} />
          </Switch>
        </div>
        <Footer />
      </div>
    </CloudinaryContext>
  );
}

export default App;
