import "./App.css";
import { Switch, Route } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={RequireAuth(Home, false)} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/yoga" component={Yoga} />
        <Route exact path="/meditation" component={Meditation} />
        <Route exact path="/other" component={Other} />
        <Route
          exact
          path="/myAccount"
          component={RequireAuth(MyAccount, true)}
        />
        <Route exact path="/login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/admin" component={Admin} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
