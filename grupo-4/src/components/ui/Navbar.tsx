import Image from 'next/image';
import NextLink from 'next/link';
import { Spacer, Text, useTheme, Link } from '@nextui-org/react';
export const Navbar = () => {

const {theme } = useTheme()

  return (
      <div style={{
          display: 'flex',
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'start',
          padding: '0x 20px',
          backgroundColor: theme?.colors.gray100.value
      }}>
          <Image
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
              alt="icono de la app"
              width={50}
        height={50}
        data-testid={`navbar-image`}
      />
      <NextLink href="/" passHref>
        <Link>
          <Text color='white' h2  data-testid={`navbar-title`}>Pokemón</Text>
        </Link>
      </NextLink>
          <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites" passHref >
        <Link css={{marginRight: '10px'}} data-testid={`navbar-favorites-link`}>
          <Text color='white'>Favoritos</Text>
          </Link>
      </NextLink>
    </div>
  )
}
