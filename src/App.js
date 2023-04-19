import React from "react";

import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Login } from "./login/login";
import { Stats } from "./stats/stats";
import { List } from "./list/list";
import { About } from "./about/about";
import { AuthState } from "./login/authState";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [userName, setUserName] = React.useState(
    localStorage.getItem("userName")
  );
  const [authState, setAuthState] = React.useState(AuthState.Unknown);
  React.useEffect(() => {
    if (userName) {
      fetch(`/api/user/${userName}`)
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
        })
        .then((user) => {
          const state = user?.authenticated
            ? AuthState.Authenticated
            : AuthState.Unauthenticated;
          setAuthState(state);
        });
    } else {
      setAuthState(AuthState.Unauthenticated);
    }
  }, [userName]);

  return (
    <BrowserRouter>
      <div class="top overflowfix">
        <div class="cards-footer">
          <header>
            <nav class="first-color navbar navbar-expand-lg">
              <div class="container-fluid">
                <div class="navbar-brand">To-Do</div>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    {authState === AuthState.Authenticated && (
                      <li class="nav-item">
                        <NavLink
                          class="nav-link "
                          aria-current="page"
                          to="list"
                        >
                          To-Do
                        </NavLink>
                      </li>
                    )}
                    {authState === AuthState.Authenticated && (
                      <li class="nav-item">
                        <NavLink
                          class="nav-link "
                          aria-current="page"
                          to="stats"
                        >
                          Stats
                        </NavLink>
                      </li>
                    )}
                    <li class="nav-item">
                      <NavLink class="nav-link " aria-current="page" to="about">
                        About
                      </NavLink>
                    </li>
                  </ul>
                  <NavLink class="btn btn-dark btn-lg btn-block" to="">
                    Account
                  </NavLink>
                </div>
              </div>
            </nav>
          </header>

          <Routes>
            <Route
              path="/"
              element={
                <Login
                  userName={userName}
                  authState={authState}
                  onAuthChange={(userName, authState) => {
                    setAuthState(authState);
                    setUserName(userName);
                  }}
                />
              }
              exact
            />
            <Route path="/list" element={<List />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <footer class="navbar-fixed-bottom footer footerflex text-center footer-color">
            <div class="text-lg-start p-3">© 2023 Hannah Spigarelli</div>
            <div class="text-lg-end">
              <NavLink
                class="text-dark"
                href="https://github.com/hgspig/startup"
              >
                Source
              </NavLink>
            </div>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <main className="container-fluid bg-secondary text-center">
      {" "}
      404: Return to sender. Address unknown.
    </main>
  );
}

export default App;
