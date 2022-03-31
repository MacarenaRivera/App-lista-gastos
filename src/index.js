import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import WebFont from "webfontloader";
import Container from "./elements/Container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditExpenses from './components/EditExpenses';
import ExpenseList from './components/ExpenseList';
import ExpensesByCategory from './components/ExpensesByCategory';
import Login from './components/Login';
import Register from './components/Register';

WebFont.load({
  google: {
    //Work+Sans:wght@400;500;700
    families: ["Work Sans:400,500,700", "sans-serif"],
  },
});

const Index = () => {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
          <Route path="categories" element={<ExpensesByCategory/>} />
          <Route path="list" element={<ExpenseList/>} />
          <Route path="edit/:id" element={<EditExpenses/>} />
          <Route path="/" element={<App/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
