import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/home/Homepage";
import Personnel from "./pages/personnel/personnelPage";
import Details from "./pages/details/detailsPage"
// import NoPage from "./pages/not-found/not-FoundPage";
import Login from "./pages/login/LoginPage";
import Edit from "./components/editmodal"
import Create from "./components/create"
import Forgotpassword from "./pages/forgotpassword/ForgotpasswordPage";
import './index.css';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="forgotpassword" element={<Forgotpassword />}></Route>
        < Route path="login" element={<Login />} />
        < Route path="edit" element={<Edit />} />
        < Route path="create" element={<Create />} />


        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="personnel" element={<Personnel />} />
          < Route path="details" element={<Details />} />

        </Route>

        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);