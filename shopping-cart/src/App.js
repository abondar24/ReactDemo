import {useSelector,useDispatch} from 'react-redux'
import {actions} from './store/index'
import Login from './components/Login'
import Layout from './components/Layout';

function App() {

 
  return (
    <div>
      {/* <Login/>   */}
      <Layout />
    </div>
  );
}

export default App;
