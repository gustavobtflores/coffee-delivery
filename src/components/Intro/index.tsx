import {
  Container,
  IconRounded,
  IntroWrapper,
  Items,
  TextContent,
} from './styles';
import illustrationImg from './assets/illustration.png';
import { Coffee, Package, ShoppingCartSimple, Timer } from 'phosphor-react';

export function Intro() {
  return (
    <Container>
      <IntroWrapper>
        <TextContent>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <Items>
            <div>
              <IconRounded background="dark-yellow">
                <ShoppingCartSimple weight="fill" size={16} />
              </IconRounded>
              Compra simples e segura
            </div>
            <div>
              <IconRounded background="gray">
                <Package weight="fill" size={16} />
              </IconRounded>
              Embalagem mantém o café intacto
            </div>
            <div>
              <IconRounded background="yellow">
                <Timer weight="fill" size={16} />
              </IconRounded>
              Entrega rápida e rastreada
            </div>
            <div>
              <IconRounded background="purple">
                <Coffee weight="fill" size={16} />
              </IconRounded>
              O café chega fresquinho até você
            </div>
          </Items>
        </TextContent>
        <img src={illustrationImg} alt="" />
      </IntroWrapper>
    </Container>
  );
}
