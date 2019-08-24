import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from "./pages/Info";
import Main from "./pages/index";
import Dash from "./pages/Dashboard";
import QR from "./pages/QR";
import Navbar from "./components/Nav";
// import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Wrapper>
          <Route exact path="/" component={Main} />
          <Route exact path="/info" component={Books} />
          <Route exact path="/QR" component={QR} />
          <Route exact path="/dashboard" component={Dash} />
        </Wrapper>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
