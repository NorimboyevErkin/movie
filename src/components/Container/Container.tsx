import classes from "./Container.module.scss"

type ContainerProps = {
  children: React.ReactNode;
};
function Container({ children }: ContainerProps) {
  return <div className={classes.container}>{children}</div>;
}

export default Container;
