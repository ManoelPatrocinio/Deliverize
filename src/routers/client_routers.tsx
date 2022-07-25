import { BrowserRouter,Route, Routes } from "react-router-dom";
import { Product } from "../pages/product";

export function Client_Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product/>} />
      </Routes>
    </BrowserRouter>
  );
}
