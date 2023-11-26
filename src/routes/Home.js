import React, { useEffect } from "react";
import LeftNavigatorTab from "../components/home/leftNavigatorTab/LeftNavigatorTab";
import { Outlet } from "react-router-dom";
import styles from "../components/home/Home.module.scss";
import useAuthRedirerct from "../hooks/useAuthRedirect";

function Home() {
  useAuthRedirerct();

  return (
    <div className={styles.container}>
      <LeftNavigatorTab classes={styles.left_navigator_tab_outer} />
      <div className={styles.inner_main_container}>
        <div className={styles.left_navigator_tab_inner}>
          <LeftNavigatorTab classes={styles.navigator_styles} />
        </div>
        <div className={styles.inner_container}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Home;
