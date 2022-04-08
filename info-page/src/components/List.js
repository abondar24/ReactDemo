import '../stylesheets/List.css';


function List(props) {
  return (
    <div id="list" className={props.lightMode ? "light" : ""}>
      <h1 className="list-header">What it contains</h1>
      <ul className="list-facts">
        <li>Components</li>
        <li>JSX</li>
        <li>Redux</li>
        <li>Routing</li>
        <li>State</li>
      </ul>
    </div>
  )
}

export default List
