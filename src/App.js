// src/App.js
import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/post/:id" component={PostPage} />
        <Route path="/login" component={LoginPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}
