import { useSelector, useDispatch } from "react-redux"
import { actions } from "./store/index"
import Login from "./components/Login"
import Layout from "./components/Layout";
import { useEffect } from "react";
import Notification from "./components/Notification";
import { notificationActions } from "./store/notification-slice";
import { sendCardData } from "./store/cart-slice";


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

    dispatch(sendCardData(cart));
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
