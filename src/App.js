import { Route, Routes } from "react-router-dom";
import Auth from "./routes/Auth";
import Home from "./routes/Home";
import useAuthRedirerct from "./hooks/useAuthRedirect";
import AddProduct from "./components/home/addProduct/AddProduct";
import ProductOperationHistory from "./components/home/productOperationHistory/ProductOperationHistory";
import Stock from "./components/home/stock/Stock";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import Manufacture from "./components/home/manufacture/Manufacture";
import { REPO_NAME } from "./Api";

function App() {
  useAuthRedirerct();

  return (
    <Routes>
      <Route path={`${REPO_NAME}/auth`} element={<Auth />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path={REPO_NAME} element={<Home />}>
        <Route path="add" element={<AddProduct />} />
        <Route path="manufacture" element={<Manufacture />} />
        <Route path="history" element={<ProductOperationHistory />} />
        <Route path="stock" element={<Stock />} />
      </Route>
      <Route path="/" element={<h1>Better Call Soul</h1>} />
    </Routes>
  );
}

export default App;
