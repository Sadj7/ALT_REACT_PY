import styles from "./PokeCard.module.css";
import { useState } from "react";

interface PokeCardProps {
  name: string;
  image: string;
  types: string;
  weight: number;
  height: number;
  base_experience: number;
  abilities: string[];
}

export function PokeView(props: PokeCardProps) {
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
      <img src={props.image} alt={props.name} />
      <h4>Types: {props.types}</h4>
      <h4>Poids: {props.weight}</h4>
      <h4>Taille: {props.height}</h4>
      <h4>Compétences: {props.abilities}</h4>
      <h4>Expérience: {props.base_experience}</h4>
    </div>
  );
}
