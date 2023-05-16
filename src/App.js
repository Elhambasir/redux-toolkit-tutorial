import Navbar from "./components/Navbar";
import CartContainer from './components/CartContainer';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { calculate } from "./features/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
  const { isOpen } = useSelector((state) => state.modal);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculate());
  }, [cartItems, dispatch]);
  return (
    <main>
       {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App;
