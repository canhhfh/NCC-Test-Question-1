import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
