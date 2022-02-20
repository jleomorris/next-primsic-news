interface IProps {
  children: JSX.Element | JSX.Element[];
}

const EmblaSlide: React.FC<IProps> = ({ children }): JSX.Element => {
  return <div className="embla__slide">{children}</div>;
};

export default EmblaSlide;
