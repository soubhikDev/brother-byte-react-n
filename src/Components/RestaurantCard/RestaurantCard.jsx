import { useNavigate } from "react-router-dom";
import "./RestaurantCard.css";

/* ── SVG Icons ── */
const IconMapPin = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 13-8 13S4 16 4 10a8 8 0 1 1 16 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const IconBag = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);

const IconClock = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const IconStar = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const IconLeaf = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);

const IconDrumstick = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15.45 15.4c-2.13 2.13-4.6 3.35-5.52 2.44-1.36-1.37.21-4.94 2.8-7.53s6.16-4.17 7.53-2.8c.91.91-.31 3.39-2.44 5.52z"/>
    <path d="m9.43 14.6-5.5 5.5"/>
  </svg>
);

const IconGrid = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
    <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
  </svg>
);

/* ── Data ── */
const RESTAURANTS = [
  {
    id: 1,
    name: "Spice Garden",
    station: "Park Street",
    cuisine: ["North Indian", "Mughlai", "Continental"],
    rating: 4.5,
    minOrder: 149,
    deliveryTime: "25–35 min",
    type: "veg",
    img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&q=80",
  },
  {
    id: 2,
    name: "Biryani House",
    station: "Esplanade",
    cuisine: ["Mughlai", "Hyderabadi", "Biryani"],
    rating: 4.2,
    minOrder: 199,
    deliveryTime: "30–40 min",
    type: "nonveg",
    img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&q=80",
  },
  {
    id: 3,
    name: "The Dhaba Co.",
    station: "Salt Lake",
    cuisine: ["Punjabi", "North Indian", "Tandoori"],
    rating: 4.7,
    minOrder: 99,
    deliveryTime: "20–30 min",
    type: "both",
    img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&q=80",
  },
  {
    id: 4,
    name: "Green Bowl",
    station: "New Town",
    cuisine: ["Continental", "Italian", "Asian"],
    rating: 4.3,
    minOrder: 179,
    deliveryTime: "35–45 min",
    type: "veg",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80",
  },
  {
    id: 5,
    name: "Tandoor Nights",
    station: "Howrah",
    cuisine: ["Rajasthani", "North Indian", "Marwari"],
    rating: 3.9,
    minOrder: 129,
    deliveryTime: "30–45 min",
    type: "nonveg",
    img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&q=80",
  },
  {
    id: 6,
    name: "Fusion Bites",
    station: "Gariahat",
    cuisine: ["Asian Fusion", "Thai", "Chinese"],
    rating: 4.6,
    minOrder: 249,
    deliveryTime: "25–35 min",
    type: "both",
    img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=500&q=80",
  },
];

/* ── Helpers ── */
const getRatingClass = (rating) => {
  if (rating >= 4.3) return "high";
  if (rating >= 3.5) return "medium";
  return "low";
};

const TYPE_CONFIG = {
  veg: {
    dotClass: "veg",
    dotLabel: "Veg",
    pillClass: "veg",
    icon: <IconLeaf />,
    pillLabel: "Pure Veg",
  },
  nonveg: {
    dotClass: "nonveg",
    dotLabel: "Non-Veg",
    pillClass: "nonveg",
    icon: <IconDrumstick />,
    pillLabel: "Non-Veg",
  },
  both: {
    dotClass: "both",
    dotLabel: "Both",
    pillClass: "both",
    icon: <IconGrid />,
    pillLabel: "Veg & Non-Veg",
  },
};

/* ── RestaurantCard Component ── */
function RestaurantCard({ restaurant }) {
  const navigate = useNavigate();
  const { name, station, cuisine, rating, minOrder, deliveryTime, type, img } =
    restaurant;
  const tc = TYPE_CONFIG[type];
  const ratingClass = getRatingClass(rating);
  const targetUrl = `/station-menu/${encodeURIComponent(name)}`;

  return (
    <article
      className="restaurant-card"
      tabIndex={0}
      role="button"
      aria-label={`Open station menu for ${name}`}
      onClick={() => navigate(targetUrl)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          navigate(targetUrl);
        }
      }}
    >
      {/* Image */}
      <div className="card-image-wrapper">
        <img
          src={img}
          alt={`${name} food`}
          className="card-image"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.nextSibling &&
              (e.currentTarget.nextSibling.style.display = "flex");
          }}
        />
        <div className="image-fallback" style={{ display: "none" }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <path d="m9 9 3 3 3-3"/>
          </svg>
          No Image
        </div>

        {/* Rating badge */}
        <div className={`rating-badge ${ratingClass}`} aria-label={`Rating ${rating}`}>
          <IconStar />
          <span>{rating}</span>
        </div>

        {/* Veg type badge */}
        <div className="veg-type-badge" aria-label={`Food type: ${tc.dotLabel}`}>
          <div className={`veg-dot ${tc.dotClass}`} />
          <span className={`veg-dot-label ${tc.dotClass}`}>{tc.dotLabel}</span>
        </div>
      </div>

      {/* Body */}
      <div className="card-body">
        {/* Name + Cuisine */}
        <div className="card-name-row">
          <h3 className="restaurant-name" title={name}>{name}</h3>
          <div className="cuisine-tag-wrapper" title={Array.isArray(cuisine) ? cuisine.join(', ') : cuisine}>
            {Array.isArray(cuisine) ? (
              <>
                <span className="cuisine-tag cuisine-primary">{cuisine[0]}</span>
                {cuisine.length > 1 && (
                  <span className="cuisine-tag-more">
                    {cuisine.slice(1).join(', ')}
                  </span>
                )}
              </>
            ) : (
              <span className="cuisine-tag cuisine-primary">{cuisine}</span>
            )}
          </div>
        </div>

        {/* Station */}
        <div className="station-row">
          <span className="station-icon" aria-hidden="true">
            <IconMapPin />
          </span>
          <span>{station} Station</span>
        </div>

        <div className="card-divider" />

        {/* Meta footer */}
        <div className="card-meta">
          <div className="meta-item">
            <IconBag aria-hidden="true" />
            <span>Min ₹{minOrder}</span>
          </div>

          <div className="meta-sep" />

          <div className="meta-item">
            <IconClock aria-hidden="true" />
            <span>{deliveryTime}</span>
          </div>

          <div className="meta-sep" />

          <div className={`type-pill ${tc.pillClass}`} aria-label={`Type: ${tc.pillLabel}`}>
            {tc.icon}
            <span>{tc.pillLabel}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ── RestaurantSection (default export) ── */
export default function RestaurantSection({ restaurants = RESTAURANTS }) {
  return (
    <section className="restaurant-section" aria-label="Restaurant listings">
      <div className="section-header">
        <div className="section-accent-bar" aria-hidden="true" />
        <h2 className="section-title">Restaurants Near You</h2>
        <span className="section-subtitle">{restaurants.length} results</span>
      </div>

      <div className="restaurant-grid">
        {restaurants.map((r) => (
          <RestaurantCard key={r.id} restaurant={r} />
        ))}
      </div>
    </section>
  );
}
