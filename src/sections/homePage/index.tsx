import Hero from "./Hero";
import StarWarsFilms from "./StarWarsFilms/StarWarsFilms";
import { Films } from "@/components/types/types";

const HomePage: React.FC<Films> = ({films}) => {
  return (
    <>
      <Hero />
      <StarWarsFilms films={films} />
    </>
  );
};

export default HomePage;
