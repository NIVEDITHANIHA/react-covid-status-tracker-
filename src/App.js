import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import India from "./CovidApp/India";
import Header from "./CovidApp/Header";
import World from "./CovidApp/World";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<India />} />
            <Route path="/india" element={<India />} />
            <Route path="/world" element={<World />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
