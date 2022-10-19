import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";
import { Coffee, useCoffee } from "./useCoffee";

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cart: Coffee[];
  addCoffee: (productId: number, amount: number) => void;
  removeCoffee: (productId: number) => void;
}

interface Cart extends Coffee {
  amount: number;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Cart[]>(() => {
    const storagedCart = localStorage.getItem("@CoffeeDelivery:cart");

    return storagedCart ? JSON.parse(storagedCart) : [];
  });
  const { coffees } = useCoffee();

  useEffect(() => {
    localStorage.setItem("@CoffeeDelivery:cart", JSON.stringify(cart));
  }, [cart]);

  function addCoffee(productId: number, amount: number) {
    const coffeeToAdd = coffees.find((coffee) => coffee.id === productId);
    const coffeeWithAmount = coffeeToAdd ? { ...coffeeToAdd, amount } : null;

    if (coffeeWithAmount === null) {
      throw new Error(`Produto com id: ${productId} não encontrado`);
    }

    const isProductAlreadyOnCart = cart.findIndex(
      (coffee) => coffee.id === productId
    );

    if (isProductAlreadyOnCart !== -1) {
      toast.error("Produto já adicionado ao carrinho");
    } else {
      const newCart = [...cart, coffeeWithAmount];
      setCart(newCart);
      toast.success(
        `${coffeeWithAmount.name} x ${coffeeWithAmount.amount} adicionado ao carrinho`
      );
    }
  }

  function removeCoffee(productId: number) {
    const newCart = cart.filter((coffee) => coffee.id !== productId);
    setCart(newCart);
  }

  return (
    <CartContext.Provider value={{ cart, addCoffee, removeCoffee }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}
