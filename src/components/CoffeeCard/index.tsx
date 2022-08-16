import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react';
import { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import {
  AmountSelector,
  CartButton,
  CoffeeWrapper,
  Price,
  SelectionMenu,
  Tags,
} from './styles';

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

  const currencyFormat = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  });

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
          R$ <strong>{currencyFormat.format(price)}</strong>
        </Price>
        <AmountSelector>
          <button
            onClick={() => {
              if (amount > 1) {
                setAmount(amount - 1);
              }
            }}
          >
            <Minus size={14} weight={'bold'} />
          </button>
          {amount}
          <button onClick={() => setAmount(amount + 1)}>
            <Plus size={14} weight="bold" />
          </button>
        </AmountSelector>
        <CartButton onClick={() => addCoffee(id, amount)}>
          <ShoppingCartSimple size={22} weight="fill" />
        </CartButton>
      </SelectionMenu>
    </CoffeeWrapper>
  );
}
