import { ShoppingCart } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import {
  AddCartWrapper,
  CardFooter,
  CardTitleAndImage,
  Description,
  HamburgerCardContainer,
  Name,
  Tags,
} from "./styles";
import { formatMoney } from "../../../../utils/formatMoney";

export interface Lanches {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}
interface LanchesProps {
  lanches: Lanches;
}

export function HamburgerCard({ lanches }: LanchesProps) {
  const formattedPrice = formatMoney(lanches.price);

  return (
    <HamburgerCardContainer>
      <CardTitleAndImage>
        <div>
          <Name>{lanches.name}</Name>
          <Tags>
            {lanches.tags.map((tag) => (
              <span key={`${lanches.id}${tag}`}>{tag}</span>
            ))}
          </Tags>

          <Description>{lanches.description}</Description>
        </div>

        <img src={`/burgers/lanche1.png`} />
      </CardTitleAndImage>
      <CardFooter>
        <div>
          <RegularText size="s">$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>
        <AddCartWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </HamburgerCardContainer>
  );
}
