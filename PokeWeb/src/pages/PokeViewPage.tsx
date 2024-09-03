import { useParams } from "react-router-dom";
import { PokeView } from "../components/PokeView";
import { usePokeListQuery } from "../queries/usePokeListQuery";

export function PokeViewPage() {
  const params = useParams();
  const pokemonListQuery = usePokeListQuery();

  if (pokemonListQuery.isLoading) {
    return <p>Chargement en cours</p>;
  }

  if (pokemonListQuery.isError) {
    return <p>Erreur au chargement</p>;
  }

  const pokemons = pokemonListQuery.data;

  return (
    <div>
      {pokemons?.results.map((pokemon) => {
        if (params.name === pokemon.name) {
          return (
            <PokeView
              key={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              types={pokemon.types.join(" - ")}
              weight={pokemon.weight}
              height={pokemon.height}
              abilities={pokemon.abilities}
              base_experience={pokemon.base_experience}
            ></PokeView>
          );
        }
      })}
    </div>
  );
}
