import { FC } from "react";
import { SmallPokemon } from "../../interfaces";

import { Grid, Card, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
interface Props {
  pokemon: SmallPokemon;
}
export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { id, name, img } = pokemon;
  const router = useRouter();
  const redirectById = () => {
    router.push(`/pokemon/id/${id}`);
  };
  const redirectByName = () => {
    router.push(`/pokemon/name/${name}`);
  };
  return (
    <div>
      <div>
        <div>
          <img src={img} width="100%" height={140} data-testid={`pokemon-card-image-${id}`}></img>
        </div>
        <div />
        <footer>
          <div>
            <h3>
              {name}
            </h3>
            <p>#{id}</p>
          </div>
        </footer>
      </div>
    </div>
  );
};
