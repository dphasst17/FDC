import classNames from "classnames/bind";
import style from "./DefaultLayout.module.scss";
import Header from "~/components/Layout/DefaultLayout/Header";
import Footer from "./Footer";

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className="mainPage">
        <div className="content">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
