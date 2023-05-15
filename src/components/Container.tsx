interface ContainerProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`${className} container mx-auto h-full px-5 md:px-20 xl:px-24`}
    >
      {children}
    </div>
  );
};

export default Container;
