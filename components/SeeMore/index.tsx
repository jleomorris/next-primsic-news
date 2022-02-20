import { ReactElement } from "react";
// Icons
import { SiPlaystation5, SiPlaystation4 } from "react-icons/si";
import { IconContext } from "react-icons";
import { RiArrowDownCircleLine } from "react-icons/ri";
import {
  GiConsoleController,
  GiVirtualMarker,
  GiMoneyStack,
} from "react-icons/gi";
import { FaPlaystation } from "react-icons/fa";
// Components
import SectionWrapper from "../SectionWrapper";

interface SeeMore {
  icon: ReactElement;
  title: string;
}

const seeMoreData: SeeMore[] = [
  {
    icon: <SiPlaystation5 />,
    title: "Games",
  },
  {
    icon: <SiPlaystation4 />,
    title: "Games",
  },
  {
    icon: <GiMoneyStack />,
    title: "All Deals",
  },
  {
    icon: <RiArrowDownCircleLine />,
    title: "Add Ons",
  },
  {
    icon: <GiConsoleController />,
    title: "Free to Play",
  },
  {
    icon: <GiVirtualMarker />,
    title: "VR",
  },
  {
    icon: <FaPlaystation />,
    title: "PS Plus",
  },
  {
    icon: <FaPlaystation />,
    title: "PS Now",
  },
];

const SeeMore: React.FC = (): React.ReactElement => {
  return (
    <div className="see-more shadow-inner">
      <SectionWrapper>
        <>
          <h2 className="text-3xl text-center font-thin my-10">See more</h2>
          <div className="flex flex-wrap justify-center items-center">
            {seeMoreData.map((item) => (
              <div
                className="bg-black bg-opacity-80 hover:bg-opacity-90 text-white flex justify-center items-center flex-col h-96 w-96 rounded-xl mb-5 mr-5 cursor-pointer"
                key={item.title}
              >
                <IconContext.Provider
                  value={{ size: "5rem", color: "#ffffff" }}
                >
                  {item.icon}
                </IconContext.Provider>
                <p className="text-3xl mt-5">{item.title}</p>
              </div>
            ))}
          </div>
        </>
      </SectionWrapper>
    </div>
  );
};

export default SeeMore;
