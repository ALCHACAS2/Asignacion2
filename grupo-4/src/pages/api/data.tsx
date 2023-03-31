export async function getServerSideProps() {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`)
  const data = await response.json();

  return {
    props: { data },
  };
}