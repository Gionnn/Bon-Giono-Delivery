import "../styles/checkout-done.css";
import { AiFillCheckCircle } from "react-icons/ai";

const Done = () => {
  return (
    <>
      <div className='checkout-container'>
        <div className='checkoutMessage'>
          <div className='checkoutTitleContainer'>
            <AiFillCheckCircle className='checkoutIcon' />
            <h3>Thank you for your order!</h3>
          </div>
          <span>
            Your order is being processed and will be delivered as fast as
            possible.
          </span>
        </div>
      </div>
    </>
  );
};

export default Done;
