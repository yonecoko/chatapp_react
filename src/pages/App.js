import React from "react";
import Room from "./Room";
import Login from "./Login";
import SignUp from "./SignUp";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "../AuthService";
import LoggedInRoute from "../LoggedInRoute";

//AuthProviderで囲むことでその中ではログイン情報を扱うことができる
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<LoggedInRoute />}>
            <Route path="/" element={<Room />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
