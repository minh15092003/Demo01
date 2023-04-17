import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/home/Homepage";
import Blogs from "./pages/blogs/BlogsPage";
import Contact from "./pages/contact/ContactPage";
import NoPage from "./pages/not-found/not-FoundPage";
import Login from "./pages/login/LoginPage";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        < Route path="login" element={<Login />} />
        < Route path="contact" element={<Contact />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} /> 
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
