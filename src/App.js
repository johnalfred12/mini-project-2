import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import Product from "./pages/product/Product";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="product" element={<Product />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}