import '../stylesheets/Card.css'
import star from '../images/star.png'


function Card(props){
  var badgeText
  if (props.rented) {
    badgeText = "Rented"
  } else if (props.hotDeal){
    badgeText = "Super deal"
  }

  return (
  <div className="card">
       {badgeText && <div className="card-badge"> {badgeText} </div>}
       <img src={props.coverImg} className="card-image"/>
       <div className="card-stats">
           <img src={star} className="card-star"/>
           <span>{props.rating}</span>
           <span className="gray">({props.reviewCount}) * </span>
           <span className="gray">{props.location}</span>
       </div>
       <p className="card-title">{props.title}</p>
       <p><span className="card-bold">From ${props.price}</span> / month</p>
  </div>
   )
}

export default Card
