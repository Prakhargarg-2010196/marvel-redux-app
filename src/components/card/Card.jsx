import cardImage from '../../assets/portrait_uncanny.jpg'
import cd from './Card.module.css'
const Card = ({comic}) => {
  return (
    <div className={cd.cardContainer}>
      <div className={cd.cardHolder}>
        <div className={cd.cardFront}>
          <div className={cd.cardLabel}> {comic.name} </div>
          <div className={cd.cardImageHolder}>
            <img src={cardImage} alt="comic"></img>
            <div className={cd.cardContent}>
              {comic.content}
            </div>
          </div>
        </div>
        <div className={cd.cardBack}>
          <div className={cd.cardContent}>
            
          </div>
        </div>  
      </div>    
      
    </div>
  )
}

export default Card