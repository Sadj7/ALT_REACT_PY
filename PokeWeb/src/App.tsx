import "./App.css";
// import { NavBar } from "./components/NavBar";
// import { PokeCard } from "./components/PokeCard";
// import { PokeView } from "./components/PokeView";
import { PokeForm } from "./components/PokeForm";
// import pokemons from "./pokemon.json";
import styles from "./components/PokeCard.module.css";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
  useParams,
} from "react-router-dom";
import { PokemonListPage } from "./pages/PokeListPage";
// import { usePokeListQuery } from "./queries/usePokeListQuery";
import { PokeViewPage } from "./pages/PokeViewPage";

function Menu() {
  return (
    <div>
      <Link to="/">
        <h2>Accueil</h2>
      </Link>
      <Link to="/contact">
        <h2>Contact</h2>
      </Link>
      <Link to="/pokemons/new">
        <h2>Créer un pokémon</h2>
      </Link>
    </div>
  );
}

function Welcome() {
  const params = useParams();
  return (
    <div>
      <h1>Hello {params.nomDuDresseur}</h1>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: (
      <div>
        Page non trouvée
        <br />
        <a href="/">Retour à l'accueil</a>
      </div>
    ),
    element: (
      <div>
        <h1>Pokedex</h1>
        <Menu />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <PokemonListPage></PokemonListPage>,
      },
      {
        path: "/contact",
        element: <div>Contact</div>,
      },
      {
        path: "/welcome/:nomDuDresseur",
        element: <Welcome />,
      },
      {
        path: "/view/:name",
        element: <PokeViewPage />,
      },
      {
        path: "/pokemons/new",
        element: (
          <div className={styles.PokeForm}>
            <PokeForm />
          </div>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
