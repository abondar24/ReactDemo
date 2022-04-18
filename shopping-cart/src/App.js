import {useSelector,useDispatch} from 'react-redux'
import {actions} from './store/index'
import Login from './components/Login'

function App() {

 
  return (
    <div>
      <Login/>  
    </div>
  );
}

export default App;
