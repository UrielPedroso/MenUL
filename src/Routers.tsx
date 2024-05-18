import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { CompleteOrderPage } from "./pages/CompleteOrder";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { LoginPage } from "./pages/Login";
import { RegisterPage } from "./pages/Register";
import { OrderConfirmedPage } from "./pages/OrderCompleted";
import { CallAttendant } from "./pages/CallAttendant";
import { Wait } from "./pages/Wait";
import { CommandGenerator } from "./pages/CommandGen";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<HomePage />}/>
                <Route path="/completeOrder" element={<CompleteOrderPage />}/>
                <Route path="/orderConfirmed" element={<OrderConfirmedPage />}/>
                <Route path="/callAttendant" element={<CallAttendant />}/>
                <Route path="/wait" element={<Wait/>}/>
            </Route>
                <Route path="/command" element={<CommandGenerator />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
    )
}