import { Route, Routes } from "react-router-dom";
import "./App.css";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
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
