import classes from "./Container.module.scss";

interface ContainerProps extends React.ComponentPropsWithoutRef<"div"> {}

let Container: React.FC<ContainerProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <div className={classes["container"] + " " + (className || "")} {...rest}>
      {children}
    </div>
  );
};

export default Container;
