import { PokeCard } from "../components/PokeCard";
import { usePokeListQuery } from "../queries/usePokeListQuery";
import styles from "../components/PokeCard.module.css";
import { useState } from "react";

export function PokemonListPage() {
  const [offset, setOffset] = useState(0);
  const limit = 10;
  const pokemonListQuery = usePokeListQuery(limit, offset);

  const incrementOffset = () => {
    setOffset(offset + 10);
  };
  const decrementOffset = () => {
    if (offset === 0) return;
    setOffset(offset - 10);
  };

  if (pokemonListQuery.isLoading) {
    return <p>Chargement en cours</p>;
  }

  if (pokemonListQuery.isError) {
    return <p>Erreur au chargement</p>;
  }

  const pokemons = pokemonListQuery.data;

  return (
    <div>
      <div className={styles.PokeGrid}>
        {pokemons?.results.map((pokemon) => {
          return (
            <PokeCard
              key={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              types={pokemon.types.join(" - ")}
            ></PokeCard>
          );
        })}
      </div>
      <div className={styles.Test}>
        <button
          className={styles.Button}
          disabled={offset === 0}
          onClick={decrementOffset}
        >
          <h2>{"<"}</h2>
        </button>
        <h4>Page {offset / 10 + 1}</h4>
        <button
          className={styles.Button}
          disabled={offset === 1280}
          onClick={incrementOffset}
        >
          <h2>{">"}</h2>
        </button>
      </div>
    </div>
  );
}
