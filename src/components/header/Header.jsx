import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <a aria-label="Home" href="/">
          Home Page
        </a>
        <a
          aria-label="GitHub"
          href="https://github.com/dantersack/rick-and-morty"
        >
          Github
        </a>
      </nav>
    </div>
  );
};

export default Header;
