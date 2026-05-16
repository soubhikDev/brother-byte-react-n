import { useCart } from '../../Context/CartContext';
import './MenuCard.css';

export default function MenuCard({
  image = "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80",
  name = "Chole Bhature",
  price = 149,
  rating = 4.3,
  ratingCount = 200,
  description = "Fluffy deep-fried bhature served with spiced chickpea curry, pickled onions & a wedge of lime.",
  isVeg = true,
  badge = "",
  id,
}) {
  const { addItem, removeItem, getQty } = useCart();
  const qty = getQty(id);
  const stars = Math.round(rating);
  const item = { id, image, name, price, rating, ratingCount, description, isVeg, badge };

  return (
    <div className={`mc ${qty > 0 ? 'mc--active' : ''}`}>
      <div className="mc__img-wrap">
        <img src={image} alt={name} className="mc__img" />
        {badge && <span className="mc__badge">{badge}</span>}
        <span className={`mc__veg-dot ${isVeg ? 'mc__veg-dot--veg' : 'mc__veg-dot--nonveg'}`}>
          <span className="mc__veg-circle" />
        </span>
      </div>

      <div className="mc__body">
        <div className="mc__top-row">
          <div className="mc__veg-tag">
            <span className={`mc__veg-box ${isVeg ? 'veg' : 'nonveg'}`}>
              <span className="mc__veg-inner" />
            </span>
            <span className={`mc__veg-label ${isVeg ? 'veg' : 'nonveg'}`}>
              {isVeg ? 'Veg' : 'Non-Veg'}
            </span>
          </div>
          <div className="mc__rating">
            <div className="mc__stars">
              {[1,2,3,4,5].map((s) => (
                <svg key={s} className={`mc__star ${s <= stars ? 'mc__star--filled' : ''}`} viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="mc__rating-num">{rating}</span>
            <span className="mc__rating-count">({ratingCount}+)</span>
          </div>
        </div>

        <h3 className="mc__name">{name}</h3>
        <p className="mc__desc">{description}</p>

        <div className="mc__footer">
          <div className="mc__price">
            <span className="mc__price-symbol">₹</span>
            <span className="mc__price-val">{price}</span>
          </div>

          {qty === 0 ? (
            <button className="mc__add-btn" onClick={() => addItem(item)}>
              <svg viewBox="0 0 24 24" className="mc__add-icon">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
              ADD
            </button>
          ) : (
            <div className="mc__qty-ctrl">
              <button className="mc__qty-btn mc__qty-btn--minus" onClick={() => removeItem(id)}>
                <svg viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z" /></svg>
              </button>
              <span className="mc__qty-num">{qty}</span>
              <button className="mc__qty-btn mc__qty-btn--plus" onClick={() => addItem(item)}>
                <svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}