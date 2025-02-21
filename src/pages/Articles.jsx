import PageContainer from '../components/PageContainer/PageContainer'
import ArticleCard from '../components/ArticleCard/ArticleCard'
import styles from './Articles.module.css'

const articles = [
  {
    id: 1,
    image: '/images/console.jpg',
    title: 'Console',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laboriosam distinctio maxime, sapiente temporibus cum quisquam totam voluptatum sapientes. Necessitatibus repellendus!'
  },
  {
    id: 2,
    image: '/images/playground.jpg',
    title: 'Playground',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laboriosam distinctio maxime, sapiente temporibus cum quisquam totam voluptatum sapientes. Necessitatibus repellendus!'
  },
  {
    id: 3,
    image: '/images/adventure.jpg',
    title: 'Adventure',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laboriosam distinctio maxime, sapiente temporibus cum quisquam totam voluptatum sapientes. Necessitatibus repellendus!'
  }
]

function Articles() {
  return (
    <PageContainer title="Artigos">
      <div className={styles.grid}>
        {articles.map(article => (
          <ArticleCard
            key={article.id}
            image={article.image}
            title={article.title}
            description={article.description}
          />
        ))}
      </div>
    </PageContainer>
  )
}

export default Articles 