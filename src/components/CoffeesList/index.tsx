import { useCoffee } from '../../hooks/useCoffee';
import { CoffeeCard } from '../CoffeeCard';
import { CoffeesListWrapper, Container } from './styles';

export function CoffeesList() {
  const { coffees } = useCoffee();

  return (
    <Container>
      <h2>Nossos cafés</h2>
      <CoffeesListWrapper>
        {coffees.map((coffee) => {
          return (
            <CoffeeCard
              key={coffee.id}
              id={coffee.id}
              image={coffee.image}
              tags={coffee.tags}
              name={coffee.name}
              description={coffee.description}
              price={coffee.price}
            />
          );
        })}
      </CoffeesListWrapper>
    </Container>
  );
}
