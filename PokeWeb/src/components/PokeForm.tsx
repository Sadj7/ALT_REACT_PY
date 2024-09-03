import React from "react";

export function PokeForm() {
  const [name, setName] = React.useState("");
  const [types, setTypes] = React.useState("");
  const [weight, setWeight] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  const isFormValid = name !== "" && types !== "";

  return (
    <div>
      <h2>Créer un Pokemon</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="types">Types</label>
        <input
          type="text"
          id="types"
          name="types"
          value={types}
          onChange={(e) => setTypes(e.target.value)}
        />
        <label htmlFor="name">Weight(Kg)</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.valueAsNumber)}
        />
        <label htmlFor="name">Heigh(cm)</label>
        <input
          type="number"
          id="height"
          name="height"
          value={height}
          onChange={(e) => setHeight(e.target.valueAsNumber)}
        />
        <button type="submit" disabled={!isFormValid}>
          Créer
        </button>
      </form>
    </div>
  );
}
