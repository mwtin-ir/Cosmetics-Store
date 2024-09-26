import Home from "./pages/home/Home";
import ProductList from "./pages/productList/ProductList";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import AboutUs from "./pages/AboutUs/AboutUs";

let routes =[
    {path : '/', element:<Home />},
    {path : '/productList', element:<ProductList />},
    {path : '/product', element:<ProductDetail />},
    {path : '/about-us', element:<AboutUs />},
]

export default routes;