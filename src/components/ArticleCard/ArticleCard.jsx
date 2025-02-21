import styles from './ArticleCard.module.css'

function ArticleCard({ image, title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <button className={styles.button}>Go Anywhere</button>
      </div>
    </div>
  )
}

export default ArticleCard 