import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { CompleteOrderPage } from "./pages/CompleteOrder";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { LoginPage } from "./pages/Login";
import { RegisterPage } from "./pages/Register";
import { OrderConfirmedPage } from "./pages/OrderCompleted";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<HomePage />}/>
                <Route path="/completeOrder" element={<CompleteOrderPage />}/>
                <Route path="/orderConfirmed" element={<OrderConfirmedPage />}/>
            </Route>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
    )
}