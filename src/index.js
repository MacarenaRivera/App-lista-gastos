import React from "react";
import { createRoot } from "react-dom/client";
//import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import WebFont from "webfontloader";
import Container from "./elements/Container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditExpenses from "./components/EditExpenses";
import ExpenseList from "./components/ExpenseList";
import ExpensesByCategory from "./components/ExpensesByCategory";
import Login from "./components/Login";
import Register from "./components/Register";
import { Helmet } from "react-helmet";
import favicon from "./images/logo.png";
import Background from "./elements/Background";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoutes from "./components/PrivateRoutes";

WebFont.load({
  google: {
    //Work+Sans:wght@400;500;700
    families: ["Work Sans:400,500,700", "sans-serif"],
  },
});

const Index = () => {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <AuthProvider>
        <BrowserRouter>
          <Container>
            <Routes>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />

              <Route path="categories" element={
                  <PrivateRoutes>
                    <ExpensesByCategory />
                  </PrivateRoutes>
                }/>
              <Route path="list" element={
                  <PrivateRoutes>
                    <ExpenseList />
                  </PrivateRoutes>
                }/>
              <Route path="edit/:id" element={
                  <PrivateRoutes>
                    <EditExpenses />
                  </PrivateRoutes>
                }/>
              <Route path="/" element={
                  <PrivateRoutes>
                    <App />
                  </PrivateRoutes>
                }/>
            </Routes>
          </Container>
        </BrowserRouter>
      </AuthProvider>
      <Background />
    </>
  );
};

//por actualizacion me pidió usar createRoot en vez de ReactDom
const root = createRoot(document.getElementById("root"));
root.render(<Index />);
