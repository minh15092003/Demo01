import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/home/Homepage";
import Personnel from "./pages/personnel/PersonnelPage";
import Details from "./pages/details/detailsPage";
import NoPage from "./pages/not-found/not-FoundPage";
import Login from "./pages/login/LoginPage";
import Forgotpassword from "./pages/forgotpassword/ForgotpasswordPage"
import './index.css';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="forgotpassword" element={<Forgotpassword/>}></Route>
      < Route path="details" element={<Details/>} />
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