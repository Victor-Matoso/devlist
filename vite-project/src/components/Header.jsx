import styles from "./Header.module.css";
import linkedinLogo from "../assets/logo-linkedin.svg";
import githubLogo from "../assets/logo-github.svg";
import telegramLogo from "../assets/logo-telegram.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>To-do List</h1>
        <ul className={styles.socialMedia}>
          <li className={styles.link}>
            <a href="https://linkedin.com">
              <img src={linkedinLogo} alt="" />
            </a>
          </li>
          <li className={styles.link}>
            <a href="https://github.com">
              <img src={githubLogo} alt="" />
            </a>
          </li>
          <li className={styles.link}>
            <a href="https://t.me">
              <img src={telegramLogo} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
