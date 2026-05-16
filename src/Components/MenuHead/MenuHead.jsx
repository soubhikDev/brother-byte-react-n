import { useState } from "react";
import './MenuHead.css';

const StarIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
const PinIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);
const BagIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 2l1.5 3H18l1.5-3H6zm-2 4l1 14h14l1-14H4zm8 10c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
  </svg>
);
const CalIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 4h-1V2h-2v2H8V2H6v2H5C3.89 4 3 4.9 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 16H5V9h14v11zM7 11h5v5H7z" />
  </svg>
);
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
  </svg>
);
const CartIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96C5 16.1 6.1 17 7 17h11v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63H18c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0022.46 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
  </svg>
);

const data = {
  name: "Shri Krishna Food",
  badge: "Punjabi Special",
  orderbefore: 'Order Before: 12 May 2026 by 14:20',
  station: "Vadodara",
  fssai: "10722032001215",
  rating: "4.3",
  ratingCount: "200+",
  minOrder: "₹ 149",
  date: "12 May 2026",
  time: "14:20",
  img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&q=80",
};

export default function MenuHead() {
  const [ordered, setOrdered] = useState(false);

  return (
    <>
      <div className="page-wrap">
        <div className="rc">
          {/* Image */}
          <div className="rc-img-col">
            <img src={data.img} alt={data.name} />
            <div className="rc-img-overlay" />
            <div className="rc-badge">{data.badge}</div>
            <div className="rc-img-bottom">
              <div className="rc-rating-pill">
                <StarIcon /> {data.rating}
              </div>
              <span className="rc-rating-count">{data.ratingCount} ratings</span>
            </div>
          </div>

          {/* Body */}
          <div className="rc-body">
            <div className="rc-top">
              <div className="rc-name">{data.name}</div>
              <div className="rc-location">
                <PinIcon />
                Station: {data.station}
              </div>
              <div className="rc-fssai">
                <div className="fssai-logo">
                  f<em>ss</em>a<sup>i</sup>
                </div>
                <div className="fssai-num">{data.fssai}</div>
              </div>
            </div>

            <div className="rc-info-grid">
              <div className="rc-info-cell">
                <div className="rc-info-label"><BagIcon /> Min Order</div>
                <div className="rc-info-val">{data.minOrder}</div>
              </div>
              <div className="rc-info-cell">
                <div className="rc-info-label"><CalIcon /> Date</div>
                <div className="rc-info-val">{data.date}</div>
              </div>
              <div className="rc-info-cell">
                <div className="rc-info-label"><ClockIcon /> Time</div>
                <div className="rc-info-val">{data.time}</div>
              </div>
            </div>

            <div className="rc-bottom">
              <div className="rc-tag">
                <StarIcon /> {data.badge}
              </div>
              <div className="rc-tag">
                <StarIcon /> {data.orderbefore}
              </div>
              {/* <button
                className="rc-btn"
                onClick={() => setOrdered(!ordered)}
              >
                <CartIcon />
                {ordered ? "Added!" : "Order Now"}
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
