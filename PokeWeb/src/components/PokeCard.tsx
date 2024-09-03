import { Link } from "react-router-dom";
import styles from "./PokeCard.module.css";
import { useState } from "react";

interface PokeCardProps {
  name: string;
  image: string;
  types: string;
}

export function PokeCard(props: PokeCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`${styles.PokeCard} ${isHovered ? styles.hovered : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2>{props.name}</h2>
      <img width={96} height={96} src={props.image} alt={props.name} />
      <h4>Types: {props.types}</h4>
      <Link to={`/view/${props.name}`}>
        <button>Voir Détails</button>
      </Link>
    </div>
  );
}
