import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const EmblaCarousel: React.FC<IProps> = ({ children }): React.ReactElement => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla-carousel relative">
      <div className="embla relative">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container space-x-5 px-20 pt-10 pb-28">
            {children}
          </div>
        </div>
      </div>
      <button
        className="embla__prev -left-5 rounded-full h-14 w-14 bg-playstation-primary flex justify-center items-center"
        onClick={scrollPrev}
      >
        <IoChevronBackOutline color="#ffffff" className="text-4xl" />
      </button>
      <button
        className="embla__next -right-5 rounded-full h-14 w-14 bg-playstation-primary flex justify-center items-center"
        onClick={scrollNext}
      >
        <IoChevronForwardOutline color="#ffffff" className="text-4xl" />
      </button>
    </div>
  );
};

export default EmblaCarousel;
