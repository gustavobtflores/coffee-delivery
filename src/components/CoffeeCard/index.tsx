import { ShoppingCartSimple } from "phosphor-react";
import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { formatCurrency } from "../../utils/Formatter";
import { AmountSelector } from "../AmountSelector";
import {
  CartButton,
  CoffeeWrapper,
  Price,
  SelectionMenu,
  Tags,
} from "./styles";

interface CoffeeCardProps {
  name: string;
  description: string;
  image: string;
  price: number;
  tags: string[];
  id: number;
}

export function CoffeeCard({
  id,
  name,
  description,
  image,
  price,
  tags,
}: CoffeeCardProps) {
  const [amount, setAmount] = useState(1);
  const { addCoffee } = useCart();

  const handleAmountChange = (quantity: number) => {
    setAmount(quantity);
  };

  return (
    <CoffeeWrapper>
      <img src={image} />
      <Tags>
        {tags.map((tag) => {
          return <span key={tag}>{tag}</span>;
        })}
      </Tags>
      <strong>{name}</strong>
      <p>{description}</p>
      <SelectionMenu>
        <Price>
          R$ <strong>{formatCurrency(price)}</strong>
        </Price>
        <AmountSelector amount={amount} onAmountChange={handleAmountChange} />
        <CartButton onClick={() => addCoffee(id, amount)}>
          <ShoppingCartSimple size={22} weight="fill" />
        </CartButton>
      </SelectionMenu>
    </CoffeeWrapper>
  );
}
