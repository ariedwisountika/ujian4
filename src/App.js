import React,{Component} from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Content from "./component/Content";
import Header from "./component/Header";
import Main from "./component/Main";


function App() {
  return (
    <Router>
      <Main/>
    </Router>

  );
}

export default App;
