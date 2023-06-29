import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import FormComponent from "./FormComponent";
import DataPage from "./DataPage";

const App = () => {
  return (
    <Router>
      <Layout></Layout>
    </Router>
  );
};

export default App;
