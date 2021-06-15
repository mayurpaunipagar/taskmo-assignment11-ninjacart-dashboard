import logo from "./logo.svg";
import "./App.css";
import QcDetails from "./component/qcDetails";
import Login from "./component/login";
import MainFrame from "./component/mainFrame";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import QcCheckDone from "./component/qcCheckDone";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [blur, setBlur] = useState(false);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            {loggedIn ? (
              <>
                {blur ? <QcCheckDone blur={blur} setBlur={setBlur} /> : null}
                <div className={blur ? "disableClick" : ""}>
                  <MainFrame blur={blur} setBlur={setBlur} />
                </div>
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
