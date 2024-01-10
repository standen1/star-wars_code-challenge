import Card from "@/components/card/Card";
import { filmCardImageLinks } from "@/constants/filmCardImageLinks";
import { Films } from "@/components/types/types";
import styles from "./StarWarsFilms.module.css";

const StarWarsFilms: React.FC<Films> = ({films}) => {

    let filmImageIndex: number = 0;

    const filmCards = films.map((film: any) => {

    filmImageIndex = filmImageIndex + 1; 
     return (
        <Card key={film.node.title} title={film.node.title} director={film.node.director} description={film.node.openingCrawl} imageUrl={filmCardImageLinks[filmImageIndex - 1]} />
     );   
    });

    return (
        <div className="container">
            <div className={styles.FilmCardsGrid}>
                {filmCards}
            </div>
        </div>
    )
}

export default StarWarsFilms;