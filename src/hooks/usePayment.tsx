import { createContext, ReactNode, useContext, useState } from "react";

const PaymentContext = createContext<PaymentContextData>(
  {} as PaymentContextData
);

interface PaymentContextData {
  paymentMethod: string;
  changePaymentMethod: (method: string) => void;
}

interface PaymentProviderProps {
  children: ReactNode;
}

export function PaymentProvider({ children }: PaymentProviderProps) {
  const [paymentMethod, setPaymentMethod] = useState("");

  function changePaymentMethod(method: string) {
    setPaymentMethod(method);
  }

  return (
    <PaymentContext.Provider value={{ paymentMethod, changePaymentMethod }}>
      {children}
    </PaymentContext.Provider>
  );
}

export function usePayment() {
  const context = useContext(PaymentContext);

  return context;
}
