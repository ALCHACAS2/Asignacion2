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
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Card isHoverable isPressable data-testid={`pokemon-card-${id}`}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={img} width="100%" height={140} data-testid={`pokemon-card-image-${id}`}></Card.Image>
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize" data-testid={`pokemon-card-link-name-${id}`}>
              {name}
            </Text>
            <Text data-testid={`pokemon-card-link-id-${id}`}>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
