import PageContainer from '../components/PageContainer/PageContainer'
import { FormattedMessage } from 'react-intl'
import './Articles.css'

function Articles() {
  return (
    <PageContainer title="Artigos">
      <div className="construction-container">
        <img 
          src="/assets/images/website-under-construction.png" 
          alt="Em construção"
          className="construction-image"
        />
        <p className="construction-text">
          <FormattedMessage id="common.underConstruction" />
        </p>
      </div>
    </PageContainer>
  )
}

export default Articles 