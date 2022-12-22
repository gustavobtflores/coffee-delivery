import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./hooks/useCart";
import { CoffeeProvider } from "./hooks/useCoffee";
import { PaymentProvider } from "./hooks/usePayment";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";
import { Success } from "./pages/Success";

export function Router() {
  return (
    <BrowserRouter>
      <CoffeeProvider>
        <CartProvider>
          <PaymentProvider>
            <Routes>
              <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/success" element={<Success />} />
              </Route>
            </Routes>
          </PaymentProvider>
        </CartProvider>
      </CoffeeProvider>
    </BrowserRouter>
  );
}
