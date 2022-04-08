import '../stylesheets/Footer.css';

function Footer (props){
  return (
    <footer className={props.lightMode ? "light" : ""}>
      <small>Copyright (c) 2022 Experimental development </small>
    </footer>

  )
}

export default Footer
