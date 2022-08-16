import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './hooks/useCart';
import { CoffeeProvider } from './hooks/useCoffee';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Home } from './pages/Home';

export function Router() {
  return (
    <BrowserRouter>
      <CoffeeProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </CartProvider>
      </CoffeeProvider>
    </BrowserRouter>
  );
}
