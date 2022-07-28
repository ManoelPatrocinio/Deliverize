import { BrowserRouter,Route, Routes } from "react-router-dom";
import { Product_Details } from "../pages/product";

export function Client_Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product_Details/>} />
      </Routes>
    </BrowserRouter>
  );
}
