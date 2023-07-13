import { Outlet, useLocation } from "react-router-dom";
import { useState, useLayoutEffect, useEffect } from "react";
import classNames from "classnames/bind";

// ---------------------------------------------------------------------------

import { Header, Sidebar } from "@/components";
import { hideSidebar } from "@/pages/ClientPage";
import styles from "./ClientLayout.module.scss";

const cx = classNames.bind(styles);

function ClientLayout() {
  const [hide, setHide] = useState<boolean>(false);
  const { pathname } = useLocation();

  useEffect(() => {
    hideSidebar.includes(pathname) ? setHide(true) : setHide(false);
  }, [pathname]);

  return (
    <>
      <Header />
      <main className={`${hide && cx("wFull")} ${cx("main")}`}>
        {!hide && <Sidebar />}
        <div className={cx("main_content")}>
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default ClientLayout;
