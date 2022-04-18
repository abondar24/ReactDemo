import { useSelector, useDispatch } from "react-redux"
import { actions } from "./store/index"
import Login from "./components/Login"
import Layout from "./components/Layout";

function App() {

  const isLoggedIn = useSelector(state => state.login.isLoggedIn);

  return (
    <div>
      {!isLoggedIn && <Login />}
      {isLoggedIn && <Layout/>}
     
    </div>
  );
}

export default App;
