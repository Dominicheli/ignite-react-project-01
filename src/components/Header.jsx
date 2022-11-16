import styles from "../components/Header.module.css";

import igniteLogo from "../assets/ignite-logo.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do ignite" />
      <h1>Ignite Feed</h1>
    </header>
  );
}
