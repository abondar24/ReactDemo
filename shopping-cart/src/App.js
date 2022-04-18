import { useSelector, useDispatch } from "react-redux"
import { actions } from "./store/index"
import Login from "./components/Login"
import Layout from "./components/Layout";
import { useEffect } from "react";
import Notification from "./components/Notification";
import { notificationActions } from "./store/notification-slice";


let isFirstRender = true
function App() {

  const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector(state => state.notification.notification)

  useEffect(() => {

    if (isFirstRender) {
      isFirstRender = false
      return;
    }

    const sendRequest = async () => {
      dispatch(notificationActions.showNotification({
        open: true,
        message: "Sending request",
        type: 'warning'
      }));

      const resp = await fetch(
        "https://shoppingcart-a62bb-default-rtdb.europe-west1.firebasedatabase.app/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart)
        });

      const data = await resp.json;

      dispatch(notificationActions.showNotification({
        open: true,
        message: "Data sent succesfully",
        type: 'success'
      }));
    }

    sendRequest().catch(err => {
      console.log(err)
      dispatch(notificationActions.showNotification({
        open: true,
        message: "Error sending data",
        type: 'error'
      }));
    });
  }, [cart]);

  return (
    <div>
      {notification && <Notification type={notification.type} message={notification.message} />}
      {!isLoggedIn && <Login />}
      {isLoggedIn && <Layout />}

    </div>
  );

}


export default App;
