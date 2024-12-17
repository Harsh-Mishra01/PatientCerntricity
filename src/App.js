import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import One from "./demo/one";
import HomePage from "./pages/HomePage";
import SupportPage from "./pages/SupportPage";
import ProductPage from "./pages/ProductPage";
import ContentPage from "./pages/ContentPage";
import TrialPage from "./pages/TrialPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Navigation Bar Routes */}
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/summary"
          element={<HomePage />}
        />
        <Route
          path="/support"
          element={<SupportPage />}
        />
        <Route
          path="/one"
          element={<One />}
        />
        <Route
          path="/content"
          element={<ContentPage />}
        />
        <Route
          path="/product"
          element={<ProductPage />}
        />
        <Route
          path="/trial"
          element={<TrialPage />}
        />

      </Routes>
    </HashRouter>
  );
}

export default App;
