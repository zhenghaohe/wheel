import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import IconExample from "./lib/icon/icon.exmaple";
import ButtonExample from "./lib/button/button.exmaple";


ReactDOM.render(
  <Router>
    <div>
      <header>
        <div className="logo">Chakras</div>
      </header>
      <div>
        <aside>
          <h2>Components</h2>
          <ul>
            <li><Link to='/icon'>Icon</Link></li>
            <li><Link to='/button'>button</Link></li>
          </ul>
        </aside>
        <main>
          <Route path='/icon' component={IconExample}></Route>
          <Route path='/button' component={ButtonExample}></Route>
        </main>
      </div>
    </div>
  </Router>,
  document.querySelector("#root")
);
