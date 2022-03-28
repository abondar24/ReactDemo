import Navbar from "./components/Navbar"
import Heading  from "./components/Heading"
import Card  from "./components/Card"
import data from "./data"


function App() {
  const cards = data.map(card =>{
    return (
      <Card
           key={card.id}
           {...card}
      />
    )
  })

  return (
   <div>
      <Navbar />
      <Heading />
      <section className="cards">
         {cards}
      </section>

   </div>
  );
}

export default App;
