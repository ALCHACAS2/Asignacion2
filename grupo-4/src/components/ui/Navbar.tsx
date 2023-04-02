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
        <Link>
          <Text color="white" h2 data-testid={`navbar-title`}>
            Pokemón
          </Text>
        </Link>
      <Spacer css={{ flex: 1 }} />
      <Search />
    </div>
  );
};
