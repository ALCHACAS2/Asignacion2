import { FC } from "react";
import { SmallPokemon } from "../../interfaces";
import Image from 'next/image';

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
    <main>
      <div className="">
        <figure>
          <Image src={img} width={100} height={140} alt={`Imagen de ${name}`} data-testid={`pokemon-card-image-${id}`}></Image>
        </figure>
        <footer className="display-flex">
            <h3>{name}</h3>
            <h3>#{id}</h3>
        </footer>
      </div>
    </main>
  );
};
