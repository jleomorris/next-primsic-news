// Types
import { Game } from "../../types";
// Components
import Image from "next/image";
import EmblaCarousel from "../../components/EmblaCarousel";
import EmblaSlide from "../../components/EmblaCarousel/components/EmblaSlide";

interface IProps {
  games: Game[];
}

const NewGames: React.FC<IProps> = ({ games }): JSX.Element => {
  return (
    <section className="new-games flex flex-col my-20 px-20">
      <div className="flex justify-between">
        <h2 className="text-3xl font-thin">Coming Soon</h2>
        <a
          href="#"
          className="font-bold text-xl text-playstation-primary rounded-full py-3 px-5 hover:bg-gray-200"
        >
          View All
        </a>
      </div>
      {games.length > 0 && (
        <EmblaCarousel>
          <>
            {games.map((game: Game, index: number) => (
              <EmblaSlide key={`${game}-${index}`}>
                <div className="h-64 w-64 relative">
                  <div className="h-full w-full">
                    <Image
                      src={game?.imgurl[0]?.text}
                      layout="fill"
                      objectFit="contain"
                      alt="carousel"
                      className="rounded-2xl"
                    />
                  </div>
                  <div className="mt-2 text-black text-xl">
                    <h2 className="">{game?.title1[0]?.text}</h2>
                    <p className="">£{game?.price[0]?.text}</p>
                  </div>
                </div>
              </EmblaSlide>
            ))}
            <EmblaSlide>
              <div className="h-64 w-64 relative flex justify-center items-center border border-gray-400 rounded-xl">
                <p className="text-xl text-playstation-primary">View All</p>
              </div>
            </EmblaSlide>
          </>
        </EmblaCarousel>
      )}
    </section>
  );
};

export default NewGames;
