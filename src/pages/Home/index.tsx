import React from "react";
import styles from "./style.module.scss";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <div className={styles["home"]}>Home Page</div>
    </div>
  );
};

export default Home;
