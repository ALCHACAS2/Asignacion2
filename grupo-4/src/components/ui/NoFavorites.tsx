import { Container, Text,Image } from '@nextui-org/react';

 
export const NoFavorites = () => {
  return (
    <Container css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        alignItems: 'center',
        justifyContent: 'center',
alignSelf: 'center',

      }}>
        <Text h1  data-testid={`favorites-empty-title`}>No hay favoritos</Text>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/14.svg"
          alt="pokemon"
          width={250}
          height={250}
          css={{
            oppacity: 0.5,
        }}
        data-testid={`favorites-empty-image`}
        ></Image>
       </Container>
  )
}
