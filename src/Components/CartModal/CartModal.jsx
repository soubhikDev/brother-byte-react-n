import { useNavigate } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import './CartModal.css';

const IconChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const IconX = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export default function CartModal() {
  const navigate = useNavigate();
  const { cartItems, removeItem, addItem, totalItems, subtotal, tax, grandTotal, isCartOpen, closeCart } = useCart();

  if (!isCartOpen) return null;

  const items = Object.values(cartItems);

  const handleCheckout = () => {
    closeCart();
    navigate('/payment');
  };

  return (
    <div className="cart-overlay" onClick={(e) => e.target === e.currentTarget && closeCart()}>
      <div className="cart-sheet">
        {/* Handle bar */}
        <div className="cart-handle" />

        {/* Header */}
        <div className="cart-header">
          <div>
            <h2 className="cart-title">Your Cart</h2>
            <p className="cart-subtitle">{totalItems} item{totalItems !== 1 ? 's' : ''}</p>
          </div>
          <button className="cart-close-btn" onClick={closeCart} aria-label="Close cart">
            <IconX />
          </button>
        </div>

        {/* Items list */}
        <div className="cart-items-list">
          {items.length === 0 ? (
            <div className="cart-empty">
              <p>Your cart is empty</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-info">
                  <div className="cart-item-name-row">
                    <div className="cart-item-name">{item.name}</div>
                    <span className={`cart-item-veg-indicator ${item.isVeg ? 'veg' : 'nonveg'}`}>
                      <span className="cart-item-veg-box">
                        <span className="cart-item-veg-inner" />
                      </span>
                      <span className="cart-item-veg-label">
                        {item.isVeg ? 'Veg' : 'Non-Veg'}
                      </span>
                    </span>
                  </div>
                  <div className="cart-item-price">₹{item.price} each</div>
                </div>
                <div className="cart-item-qty-ctrl">
                  <button
                    className="cart-qty-btn cart-qty-btn--minus"
                    onClick={() => removeItem(item.id)}
                    aria-label="Remove one"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/></svg>
                  </button>
                  <span className="cart-qty-num">{item.qty}</span>
                  <button
                    className="cart-qty-btn cart-qty-btn--plus"
                    onClick={() => addItem(item)}
                    aria-label="Add one more"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
                  </button>
                </div>
                <div className="cart-item-total">₹{item.price * item.qty}</div>
              </div>
            ))
          )}
        </div>

        {/* Price breakdown */}
        {items.length > 0 && (
          <>
            <div className="cart-price-breakdown">
              <div className="cart-price-row">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="cart-price-row">
                <span>Taxes & charges (5%)</span>
                <span>₹{tax}</span>
              </div>
              <div className="cart-price-row cart-price-row--total">
                <span>Total</span>
                <span>₹{grandTotal}</span>
              </div>
            </div>

            <div className="cart-footer">
              <button className="cart-checkout-btn" onClick={handleCheckout}>
                Proceed to Checkout
                <IconChevronRight />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
