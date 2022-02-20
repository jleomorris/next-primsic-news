// Components
import Image from "next/image";

interface IProps {
  game: string;
}

const EmblaSlide: React.FC<IProps> = ({ game }): JSX.Element => {
  return (
    <div className="embla__slide">
      <div className="h-64 w-64 relative rounded-2xl overflow-hidden">
        <Image src={game} layout="fill" objectFit="contain" alt="carousel" />
      </div>
    </div>
  );
};

export default EmblaSlide;
