import PageContainer from '../components/PageContainer/PageContainer'
import ArticleCard from '../components/ArticleCard/ArticleCard'
import styles from './Articles.module.css'

import devCsharpImage from '../../public/assets/images/dev-csharp.jpg'

const articles = [
  {
    id: 1,
    image: devCsharpImage,
    title: 'Desenvolvimento com .NET',
    description: 'O .NET é um dos frameworks mais poderosos e versáteis para desenvolvimento de software. Criado pela Microsoft, ele oferece um ecossistema robusto e open-source...',
    link: 'https://www.linkedin.com/posts/neki-it_dotnet-desenvolvimento-csharp-activity-7297974013509652480-0T4K?utm_source=share&utm_medium=member_desktop&rcm=ACoAADTiFNkBpAg5kPKEp2AXExQ0o-5N_yo9EBo'
  },
//  {
//    id: 2,
//    image: '/images/playground.jpg',
//    title: 'Playground',
//    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laboriosam distinctio maxime, sapiente temporibus cum quisquam totam voluptatum sapientes. Necessitatibus repellendus!'
//  },
//  {
//    id: 3,
//    image: '/images/adventure.jpg',
//    title: 'Adventure',
//    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laboriosam distinctio maxime, sapiente temporibus cum quisquam totam voluptatum sapientes. Necessitatibus repellendus!'
//  }
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
            link={article.link}
          />
        ))}
      </div>
    </PageContainer>
  )
}

export default Articles 