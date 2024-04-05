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

export interface Lanches{
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}
interface LanchesProps{
  lanches: Lanches;
}

export function HamburgerCard({ lanches }: LanchesProps) {
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

          <Description>
            {lanches.description}
          </Description>
        </div>

        <img src="https://s3-alpha-sig.figma.com/img/2db1/2277/6486c85381b09fff49208c87e6368261?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ckHCGfwCot-6aM~g87yh-iPAkt~aiOTCvKdNza4bV80COx38eFHTfbzgAg0aSfh7JLMD-VuZ5qWVvHXixlhqc1EJDxFOE3foO-KxrdWXULGjACox~d0KOq8QdDHKszWn4B6j3Zf48y7kxoSmDBt09doddemjylYxwnh5ICZPtvcxg0giKwkQK~2mj8LzwzIBQrqPNS0wEqKfDo5pSahpG1vUQF1bc9jfo2v5~1USJ1jMow2F-CBncnWRq~SEWuxIa2xzREJuppmsXW2lms1dZs68JTa6-4bJksM1fwAhdEQMYrD8kLgEwdnRHmrHvmScydgcQqSNbbMJPaHSJTMzqA__" />
      </CardTitleAndImage>
      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            29,90
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
