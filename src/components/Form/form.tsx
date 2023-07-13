import { BiSearch } from "react-icons/bi";
import classNames from "classnames/bind";

import styles from "./form.module.scss";

const cx = classNames.bind(styles);

function Form() {
  return (
    <div className={cx("form__search")}>
      <input type="text" name="search" placeholder="Tìm kiếm" />
      <button className={cx("btn-submit")}>
        <BiSearch className={cx("icon__search")} />
      </button>
    </div>
  );
}

export default Form;
