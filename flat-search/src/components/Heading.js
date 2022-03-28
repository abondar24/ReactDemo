import grid from '../images/photo-grid.png'
import '../stylesheets/Heading.css';

function Heading(){
  return (
     <section className="heading-section">
        <img src={grid} className="heading-grid"/>
        <h1 className="heading-header">Great apartments for great prices</h1>
        <p className="heading-text">
        Find unique apartments around Germany matching your lifestyle
        </p>
     </section>
   )
}

export default Heading
