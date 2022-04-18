import { useSelector, useDispatch } from "react-redux"
import { actions } from "./store/index"
import Login from "./components/Login"
import Layout from "./components/Layout";
import { useEffect } from "react";

function App() {

  const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  const cart = useSelector(state => state.cart);


  useEffect(() => {

    const sendRequest = async () => {
      const resp = await fetch(
        "https://shoppingcart-a62bb-default-rtdb.europe-west1.firebasedatabase.app/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart)
        });

      const data = await resp.JSON();


    }

    sendRequest();
  }, [cart]);

  return (
    <div>
      {!isLoggedIn && <Login />}
      {isLoggedIn && <Layout />}
  
    </div>
  );
  
}


export default App;
