import React from "react";
import styles from "./Loading.module.css";
import Loader from "react-loader-spinner";

function Loading(props) {
  const { message, size, marginTop } = props;
  const { height, width } = getLoaderDimensions(size);
  const style = getStyle(marginTop);

  return (
    <div className={styles.container}>
      <Loader
        style={style}
        type="TailSpin"
        color="#00BFFF"
        height={height}
        width={width}
      />
      {message && <div className={styles.message}>{message}</div>}
    </div>
  );
}

function getLoaderDimensions(size) {
  switch (size) {
    case "small":
      return { height: 50, width: 50 };
    case "medium":
      return { height: 100, width: 100 };
    case "large":
      return { height: 150, width: 150 };
    default:
      return { height: 100, width: 100 };
  }
}

function getStyle(marginTop) {
  const marginTopVal = marginTop || 0;
  const marginTopStyle = `${marginTopVal}px`;
  return { marginTop: marginTopStyle };
}

export default Loading;
