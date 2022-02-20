interface IProps {
  children: JSX.Element | JSX.Element[];
}

const EmblaSlide: React.FC<IProps> = ({ children }): JSX.Element => {
  return (
    <div className="embla__slide border-2 cursor-pointer hover:border-playstation-primary border-white rounded-xl p-0.5">
      {children}
    </div>
  );
};

export default EmblaSlide;
