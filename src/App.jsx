import Header from "./components/Header";
import { Post } from "./Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Felipe Dominicheli" content="Lorem ipsum dolor sit" />
          <Post author="Felipe Dominicheli" content="Lorem ipsum dolor sit" />
        </main>
      </div>
    </div>
  );
}
