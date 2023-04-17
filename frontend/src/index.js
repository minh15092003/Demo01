import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/home/Homepage";
import Personnel from "./pages/personnel/personnelPage";
import NoPage from "./pages/not-found/not-FoundPage";
import Login from "./pages/login/LoginPage";
import './index.css';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        < Route path="login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="personnel" element={<Personnel />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
