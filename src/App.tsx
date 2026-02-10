import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Product from "./pages/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">

      <Header />

      <main className="flex-grow px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Article />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
}
