import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import React from 'react';


function App() {
  const [lightMode, setLightMode] = React.useState(false)

  function toggleLight(){
    setLightMode(prev => !prev)
  }

  return (
    <div className="container">
      <Header lightMode={lightMode} toggleLight={toggleLight}/>
      <List lightMode={lightMode} />
      <Footer lightMode={lightMode} />
    </div>
  );
}

export default App;
