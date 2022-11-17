import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/maykbrito.png" />
          <div className={styles.authorInfo}>
            <strong>Felipe Dominicheli</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="16 de Novembro às 19:38h" dateTime="2022-11-16 19:38:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}></div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
