import { FormattedMessage } from 'react-intl'
import './UnderConstruction.css'

function UnderConstruction() {
  return (
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
  )
}

export default UnderConstruction 