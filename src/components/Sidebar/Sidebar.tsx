import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";

// ---------------------------------------------------------------------------

import styles from "./Sidebar.module.scss";
import {
  CameraIcon,
  CompassIcon,
  HomeIcon,
  UserGroudIcon,
} from "@/components/Icons";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <>
      <aside className={cx("sidebar")}>
        <nav className={cx("navbar")}>
          <ul>
            <li>
              <NavLink
                className={(nav) => cx({ active: nav.isActive })}
                to={""}
              >
                <HomeIcon className={cx("home__icon")} />
                <span>Dành cho bạn</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/following"}
                className={(nav) => cx({ active: nav.isActive })}
              >
                <UserGroudIcon className={cx("usergroud__icon")} />
                <span>Đang Follow</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/upload"}
                className={(nav) => cx({ active: nav.isActive })}
              >
                <CompassIcon className={cx("compass__icon")} />
                <span>Khám phá</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/upload"}
                className={(nav) => cx({ active: nav.isActive })}
              >
                <CameraIcon className={cx("camera__icon")} />
                <span>LIVE</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <section className={cx("following")}>
          <span className={cx("following__title")}>
            Các tài khoản đang follow
          </span>
          <article className={cx("following__content")}></article>
        </section>
      </aside>
    </>
  );
}

export default Sidebar;
