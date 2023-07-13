import { BiMessageAltMinus } from "react-icons/bi";
import { IoIosAdd } from "react-icons/io";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import { Link } from "react-router-dom";
import classNames from "classnames/bind";

// ---------------------------------------------------------------------------

import styles from "./Header.module.scss";
import logo from "@/assets/images/logo.svg";
import avata from "@/assets/images/avata.png";
import { Form } from "..";
import { PlaneIcon } from "../Icons";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("header")}>
      <div className={cx("header__item")}>
        <div className={cx("logo")}>
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className={cx("search")}>
          <Form />
        </div>
        <div className={cx("header__right")}>
          <Link to={"upload"}>
            <div className={cx("upload")}>
              <IoIosAdd className={cx("icon__add")} />
              <span>Tải lên</span>
            </div>
          </Link>
          <Link to={"#"}>
            <Tippy content="Tin nhắn">
              <div className={cx("messages")}>
                <PlaneIcon className={cx("icon__messages")} />
              </div>
            </Tippy>
          </Link>
          <Tippy content="Hộp thư">
            <div className={cx("mailbox")}>
              <BiMessageAltMinus className={cx("icon__mailbox")} />
              <span className={cx("count__mailbox")}>3</span>
            </div>
          </Tippy>
          <div className={cx("profile")}>
            <img src={avata} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
