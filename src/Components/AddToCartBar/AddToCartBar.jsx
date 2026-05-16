import { Avatar, AvatarGroup } from '@mui/material';
import { useCart } from '../../Context/CartContext';
import './AddToCartBar.css';

const IconCart = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM.5 2h-.5C-.28 2-.5 2.22-.5 2.5S-.28 3 0 3h.85l3.05 6.76L2.5 12c0 .55.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1H5.21l-.94-2H17c.72 0 1.36-.4 1.68-1L21.5 2H.5z"/>
  </svg>
);

export default function AddToCartBar() {
  const { cartItems, totalItems, subtotal, openCart } = useCart();
  const cartImages = Object.values(cartItems);

  if (totalItems === 0) return null;

  return (
    <div className="add-cart-bar">
      <AvatarGroup spacing={12}>
        {cartImages.map((item) => (
          <Avatar key={item.id} alt={item.name} src={item.image} />
        ))}
      </AvatarGroup>
      <div className="add-cart-bar__info">
        <span className="add-cart-bar__count">{totalItems} item{totalItems > 1 ? 's' : ''}</span>
        <span className="add-cart-bar__price">₹{subtotal}</span>
      </div>
      <button className="add-cart-bar__btn" onClick={openCart}>
        <IconCart />
        View Cart
      </button>
    </div>
  );
}
