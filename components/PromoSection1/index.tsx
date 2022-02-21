import { useState } from "react";
// Components
import Image from "next/image";
import React, { useEffect } from "react";
import SectionWrapper from "../SectionWrapper";

interface IProps {
  homepage: any;
}

const PromoSection1: React.FC<IProps> = ({ homepage }): React.ReactElement => {
  const [promoTiles, setPromoTiles] = useState<any>([]);

  useEffect(() => {
    const promoTilesToRender = homepage.data.body.filter(
      (slice: any) => slice.slice_type === "promotiles1"
    );

    setPromoTiles(promoTilesToRender);
  }, []);

  return (
    <div className="bg-gray-200">
      <SectionWrapper>
        {promoTiles.length && (
          <div className="promo-section-1 flex justify-center py-20">
            {promoTiles[0].items.map((promoImage: any, index: number) => {
              const totalImageLength = promoTiles.length;

              console.log(promoImage);

              return (
                <>
                  <div
                    className={`relative w-1/4 mx-3 rounded-xl overflow-hidden`}
                    key={promoImage.imgUrl}
                  >
                    <div className="image-overlay z-10 hover:bg-black hover:bg-opacity-10 cursor-pointer absolute top-0 left-0 h-full w-full" />
                    <Image
                      src={promoImage.imgurl[0].text}
                      objectFit="cover"
                      layout="responsive"
                      width="100%"
                      height="100%"
                      alt="promo"
                    />
                  </div>
                </>
              );
            })}
          </div>
        )}
      </SectionWrapper>
    </div>
  );
};

export default PromoSection1;
