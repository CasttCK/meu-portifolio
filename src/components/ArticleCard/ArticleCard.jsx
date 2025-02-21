import styles from './ArticleCard.module.css'
import PropTypes from 'prop-types'

function ArticleCard({ image, title, description, link }) {

  const handleClick = () => {
    window.open(link, '_blank')
  }

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <button onClick={handleClick} className={styles.button}>Leia Mais...</button>
      </div>
    </div>
  )
}

ArticleCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default ArticleCard 