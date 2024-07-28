import React from "react";
import logo from "../assets/holberton-logo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "../utils/utils";
import Notifications from './Notifications/Notifications'
import Header from './Header/Header'
import Login from './Login/Login'
import Footer from './Footer/Footer'

function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <div className="App-body">
          <Login />
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;