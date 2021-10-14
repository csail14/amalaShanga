import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./screens/Home/home";
import Header from "./components/header";
import Footer from "./components/footer";

import Contact from "./screens/Contact/contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
