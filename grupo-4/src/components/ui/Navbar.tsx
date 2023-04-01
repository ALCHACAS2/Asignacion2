import NextLink from "next/link";
import { Spacer, Text, useTheme, Link } from "@nextui-org/react";
import { Search } from "./searchPokemon";
export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0x 20px",
        backgroundColor: theme?.colors.gray100.value,
      }}
    >
      <NextLink href="/" passHref>
        <Link>
          <Text color="white" h2 data-testid={`navbar-title`}>
            Pokemón
          </Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <Search />
    </div>
  );
};
