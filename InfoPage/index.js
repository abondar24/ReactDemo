
function Header(){
  return (
    <header>
      <nav className="nav">
        <img src="./react-logo.png" className="nav-logo"/>
        <ul className="nav-items">
          <li>React</li>
          <li>Node</li>
          <li>Babel</li>
        </ul>
      </nav>
    </header>
  )
}

function Footer (){
  return (
    <footer>
      <small>2022 Experimental development </small>
    </footer>

  )
}

function List(){
  return (
    <ul>
      <li>Components</li>
      <li>JSX</li>
      <li>redux</li>
    </ul>
  )
}


function Page(){
  return (
    <div>
    <Header />
    <h1>Welcome to React world</h1>
    <List/>
    <Footer />
    </div>
  )
}

ReactDOM.render(<Page />,document.getElementById("root"))
