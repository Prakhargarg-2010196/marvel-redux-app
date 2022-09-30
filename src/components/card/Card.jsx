import 'react-lazy-load-image-component/src/effects/blur.css';

// import ImagePathGenerator from '../../utils/ImagePathGenerator'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import cd from './Card.module.css'

const Card = ({ cardTitle, cardContentType, cardContent, cardImageSource,children}) => {
  
  return (
    <div className={cd.cardContainer} >
      <div className={cd.cardHolder}>
        <div className={cd.cardFront}>
          <div className={cd.cardLabel}> {cardTitle} </div>
          <div className={cd.cardImageHolder}>
            
            <LazyLoadImage effect='blur' src={cardImageSource} alt={""} />
            
          </div>
          
        </div>
        <div className={cd.cardBack}>
          <div className={cd.cardContent}>
            
              {cardContent}
              {children}

              
              
            

          </div>
        </div>  
      </div>    
      
    </div>
  )
}

export default Card