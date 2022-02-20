interface IProps {
  children: React.ReactElement;
}

const SectionWrapper: React.FC<IProps> = ({ children }): React.ReactElement => {
  return <div className="section-wrapper px-20 py-10 w-full">{children}</div>;
};

export default SectionWrapper;
