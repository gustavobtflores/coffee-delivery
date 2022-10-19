import { useCoffee } from "../../../../hooks/useCoffee";
import { CoffeeCard } from "../../../../components/CoffeeCard";
import { CoffeesListWrapper, Container } from "./styles";

export function CoffeesList() {
  const { coffees } = useCoffee();

  return (
    <Container>
      <h2>Nossos cafés</h2>
      <CoffeesListWrapper>
        {coffees.map(({ id, image, tags, description, price, name }) => {
          return (
            <CoffeeCard
              key={id}
              id={id}
              image={image}
              tags={tags}
              name={name}
              description={description}
              price={price}
            />
          );
        })}
      </CoffeesListWrapper>
    </Container>
  );
}
