import exp from "constants"
import Image from "next/image"

type Props = {
    imageUrl: string;
    title: string;
    director: string;
    description: string;
}

const Card: React.FC<Props> = ({ imageUrl, title, director, description }) => {
    return (
        <>
        <div className="film_card max-w-sm rounded overflow-hidden shadow-lg">
            <div className="film_image h-40 max-w-100 overflow-hidden relative">
                <Image src={imageUrl} alt="Star Wars" sizes="(max-width: 300px)" fill objectFit="cover" className="inset-0" />
            </div>
            
            <div className="px-6 py-4">
                <div className="film_title font-bold text-xl mb-2">{title}</div>
                <div className="film_directors-name font-bold text-l mb-2">{director}</div>
                <p className="film_description text-gray-700 text-base">
                    {description}
                </p>
            </div>
        </div>
        </>
    )
}

export default Card;