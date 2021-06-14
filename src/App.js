import logo from "./logo.svg";
import "./App.css";
import QcDetails from "./component/qcDetails";
import Login from "./component/login";
import MainFrame from "./component/mainFrame";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            {loggedIn ? (
              <>
              <MainFrame/>
                {/* <QcDetails setLoggedIn={setLoggedIn} /> */}
              </>
            ) : (
              <Login setLoggedIn={setLoggedIn} />
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
