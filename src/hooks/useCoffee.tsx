import axios from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export interface Coffee {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  tags: string[];
  amount: number;
}

interface CoffeeContextData {
  coffees: Coffee[];
}

interface CoffeeProviderProps {
  children: ReactNode;
}

const CoffeeContext = createContext<CoffeeContextData>({} as CoffeeContextData);

export function CoffeeProvider({ children }: CoffeeProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  useEffect(() => {
    const getCoffeesList = async () => {
      const coffeesList = await axios(
        "https://tranquil-cove-89175.herokuapp.com/coffees.json"
      ).then((res) => {
        return res.data.coffees;
      });

      setCoffees(coffeesList);
    };

    getCoffeesList();
  }, []);

  return (
    <CoffeeContext.Provider value={{ coffees }}>
      {children}
    </CoffeeContext.Provider>
  );
}

export function useCoffee() {
  const context = useContext(CoffeeContext);

  return context;
}
