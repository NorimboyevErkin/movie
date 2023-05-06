import classes from "./Loading.module.scss";

function Loading() {
  return (
    <div className={classes.LoadingBox}>
      <div className={classes.LoadingBounce1} />
      <div className={classes.LoadingBounce2} />
      <div className={classes.LoadingBounce3} />
    </div>
  );
}

export default Loading;
