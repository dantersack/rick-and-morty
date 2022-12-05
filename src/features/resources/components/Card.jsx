import styles from "./Card.module.css";

const Card = ({ title, text }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{text}</p>
      <div>
        <a href={`/${title}`}>See all {title}</a>
      </div>
    </div>
  );
};

export default Card;
