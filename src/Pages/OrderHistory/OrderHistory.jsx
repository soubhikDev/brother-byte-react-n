import { useState, useMemo } from "react";
import "./OrderHistory.css";

/* ══════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════ */
const ALL_ORDERS = [
  {
    id: "TB2026-X4R9KM",
    date: "13 May 2026",
    time: "12:45 PM",
    train: "12301 · Howrah Rajdhani",
    pnr: "4521897634",
    seat: "B2 · 34",
    status: "Delivered",
    paymentMethod: "UPI · GPay",
    items: [
      { name: "Paneer Butter Masala", qty: 1, price: 180 },
      { name: "Butter Naan (2 pcs)", qty: 1, price: 60 },
      { name: "Veg Biryani", qty: 1, price: 220 },
    ],
    delivery: 68,
  },
  {
    id: "TB2026-A7Z2LQ",
    date: "10 May 2026",
    time: "08:20 AM",
    train: "12259 · Sealdah Duronto",
    pnr: "8834512670",
    seat: "A1 · 12",
    status: "Delivered",
    paymentMethod: "Card · HDFC Visa",
    items: [
      { name: "Masala Dosa", qty: 2, price: 120 },
      { name: "Filter Coffee", qty: 2, price: 60 },
      { name: "Idli Sambar", qty: 1, price: 80 },
    ],
    delivery: 40,
  },
  {
    id: "TB2026-P1W8NV",
    date: "07 May 2026",
    time: "03:10 PM",
    train: "22811 · New Delhi Rajdhani",
    pnr: "2210983456",
    seat: "H1 · 58",
    status: "Cancelled",
    paymentMethod: "Wallet · Paytm",
    items: [
      { name: "Chicken Biryani", qty: 1, price: 280 },
      { name: "Raita", qty: 1, price: 40 },
    ],
    delivery: 50,
  },
  {
    id: "TB2026-C3F6TY",
    date: "02 May 2026",
    time: "06:55 PM",
    train: "12951 · Mumbai Rajdhani",
    pnr: "6672341908",
    seat: "C4 · 23",
    status: "Delivered",
    paymentMethod: "Net Banking · SBI",
    items: [
      { name: "Dal Makhani", qty: 1, price: 160 },
      { name: "Jeera Rice", qty: 1, price: 120 },
      { name: "Gulab Jamun", qty: 2, price: 80 },
      { name: "Mineral Water (1L)", qty: 1, price: 30 },
    ],
    delivery: 60,
  },
  {
    id: "TB2026-M9D4SH",
    date: "28 Apr 2026",
    time: "11:00 AM",
    train: "12002 · Bhopal Shatabdi",
    pnr: "3398217645",
    seat: "EC · 7",
    status: "Delivered",
    paymentMethod: "UPI · PhonePe",
    items: [
      { name: "Veg Sandwich", qty: 2, price: 100 },
      { name: "Chips (Lays)", qty: 1, price: 30 },
      { name: "Cold Coffee", qty: 2, price: 120 },
    ],
    delivery: 35,
  },
  {
    id: "TB2026-R5K1JB",
    date: "20 Apr 2026",
    time: "09:30 AM",
    train: "12039 · Shatabdi Express",
    pnr: "9901234567",
    seat: "CC · 15",
    status: "Refunded",
    paymentMethod: "Card · ICICI MC",
    items: [
      { name: "Breakfast Combo", qty: 1, price: 199 },
      { name: "Orange Juice", qty: 1, price: 60 },
    ],
    delivery: 30,
  },
];

const STATUS_CONFIG = {
  Delivered: { color: "#16A34A", bg: "#F0FDF4", border: "#BBF7D0", dot: "#22C55E" },
  Cancelled: { color: "#DC2626", bg: "#FEF2F2", border: "#FECACA", dot: "#EF4444" },
  Refunded:  { color: "#D97706", bg: "#FFFBEB", border: "#FDE68A", dot: "#F59E0B" },
  Pending:   { color: "#2563EB", bg: "#EFF6FF", border: "#BFDBFE", dot: "#3B82F6" },
};

const TABS = ["All", "Delivered", "Cancelled", "Refunded"];

/* ══════════════════════════════════════════════════
   ICONS
══════════════════════════════════════════════════ */
const TrainIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
    <rect x="2" y="10" width="24" height="12" rx="3" fill="#C0171D" />
    <rect x="4" y="12" width="6" height="4" rx="1" fill="white" />
    <rect x="12" y="12" width="6" height="4" rx="1" fill="white" />
    <circle cx="7" cy="24" r="2.5" fill="#C0171D" stroke="white" strokeWidth="1.5" />
    <circle cx="21" cy="24" r="2.5" fill="#C0171D" stroke="white" strokeWidth="1.5" />
    <rect x="6" y="6" width="16" height="6" rx="2" fill="#E8393F" />
    <path d="M10 9h8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const Ic = ({ d, size = 16, stroke = "currentColor", sw = 2, fill = "none", extra = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" className={extra}>
    <path d={d} />
  </svg>
);

const SearchIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
  </svg>
);

const ChevronIcon = ({ down = true, size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
    {down ? <polyline points="6 9 12 15 18 9" /> : <polyline points="18 15 12 9 6 15" />}
  </svg>
);

const CopyIcon = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
    <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const ReorderIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
    <path d="M1 4h22M1 12h22M1 20h22" />
  </svg>
);

const ReceiptIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16l3-2 2 2 2-2 2 2 2-2 3 2V4a2 2 0 0 0-2-2z" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

const StarIcon = ({ filled = false, size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? "#F59E0B" : "none"} stroke={filled ? "#F59E0B" : "#D1D5DB"} strokeWidth={2} strokeLinecap="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const PackageIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth={1.5} strokeLinecap="round">
    <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

/* ══════════════════════════════════════════════════
   HELPERS
══════════════════════════════════════════════════ */
const calcTotal = (order) =>
  order.items.reduce((s, i) => s + i.price * i.qty, 0) + order.delivery;

function useCopyToast() {
  const [copied, setCopied] = useState(null);
  const copy = (text, key) => {
    navigator.clipboard?.writeText(text).catch(() => {});
    setCopied(key);
    setTimeout(() => setCopied(null), 1800);
  };
  return { copied, copy };
}

/* ══════════════════════════════════════════════════
   RATING MODAL
══════════════════════════════════════════════════ */
function RatingModal({ order, onClose }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const submit = () => {
    if (rating === 0) return;
    setSubmitted(true);
    setTimeout(onClose, 1400);
  };

  return (
    <div className="oh-modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="oh-modal">
        {submitted ? (
          <div className="oh-modal-thanks">
            <div className="oh-thanks-icon">🎉</div>
            <h3>Thanks for your feedback!</h3>
            <p>Your rating helps us serve better.</p>
          </div>
        ) : (
          <>
            <button className="oh-modal-close" onClick={onClose}>✕</button>
            <div className="oh-modal-emoji">🍽️</div>
            <h3>Rate Your Order</h3>
            <p className="oh-modal-sub">{order.id}</p>
            <div className="oh-stars">
              {[1, 2, 3, 4, 5].map((s) => (
                <button
                  key={s}
                  className="oh-star-btn"
                  onMouseEnter={() => setHover(s)}
                  onMouseLeave={() => setHover(0)}
                  onClick={() => setRating(s)}
                >
                  <StarIcon filled={s <= (hover || rating)} size={32} />
                </button>
              ))}
            </div>
            <p className="oh-rating-label">
              {["", "Poor 😞", "Fair 😐", "Good 😊", "Great 😃", "Excellent 🤩"][hover || rating] || "Tap a star to rate"}
            </p>
            <button className="oh-submit-rating" onClick={submit} disabled={rating === 0}>
              Submit Rating
            </button>
          </>
        )}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   ORDER CARD
══════════════════════════════════════════════════ */
function OrderCard({ order, index, onRate }) {
  const [expanded, setExpanded] = useState(false);
  const { copied, copy } = useCopyToast();
  const cfg = STATUS_CONFIG[order.status] || STATUS_CONFIG.Pending;
  const total = calcTotal(order);

  return (
    <div
      className="oh-card"
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      {/* ── Card Header ── */}
      <div className="oh-card-header">
        <div className="oh-card-meta">
          <div className="oh-order-id-row">
            <span className="oh-order-id">{order.id}</span>
            <button
              className={`oh-copy-btn${copied === order.id ? " copied" : ""}`}
              onClick={() => copy(order.id, order.id)}
              title="Copy Order ID"
            >
              {copied === order.id ? "✓" : <CopyIcon />}
            </button>
          </div>
          <div className="oh-order-date">{order.date} · {order.time}</div>
        </div>

        <div
          className="oh-status-pill"
          style={{ color: cfg.color, background: cfg.bg, borderColor: cfg.border }}
        >
          <span className="oh-status-dot" style={{ background: cfg.dot }} />
          {order.status}
        </div>
      </div>

      {/* ── Train Info ── */}
      <div className="oh-train-row">
        <div className="oh-train-icon-wrap">
          <TrainIcon />
        </div>
        <div className="oh-train-details">
          <div className="oh-train-name">{order.train}</div>
          <div className="oh-train-sub">
            <span>PNR: <strong>{order.pnr}</strong></span>
            <span className="oh-dot-sep">·</span>
            <span>Seat: <strong>{order.seat}</strong></span>
            <span className="oh-dot-sep">·</span>
            <span>{order.paymentMethod}</span>
          </div>
        </div>
        <div className="oh-total-chip">₹ {total.toLocaleString("en-IN")}</div>
      </div>

      {/* ── Items Preview ── */}
      <div className="oh-items-preview">
        {order.items.slice(0, 2).map((item, i) => (
          <span key={i} className="oh-item-chip">
            {item.name} × {item.qty}
          </span>
        ))}
        {order.items.length > 2 && (
          <span className="oh-item-chip oh-more-chip">
            +{order.items.length - 2} more
          </span>
        )}
      </div>

      {/* ── Expandable Details ── */}
      <div className={`oh-details${expanded ? " open" : ""}`}>
        <div className="oh-details-inner">
          <div className="oh-breakdown-title">Order Breakdown</div>
          <div className="oh-breakdown">
            {order.items.map((item, i) => (
              <div key={i} className="oh-breakdown-row">
                <span className="oh-bi-name">{item.name}</span>
                <span className="oh-bi-qty">× {item.qty}</span>
                <span className="oh-bi-price">₹ {(item.price * item.qty).toLocaleString("en-IN")}</span>
              </div>
            ))}
            <div className="oh-breakdown-row oh-delivery-row">
              <span className="oh-bi-name">Delivery Charges</span>
              <span className="oh-bi-qty"></span>
              <span className="oh-bi-price">₹ {order.delivery}</span>
            </div>
            <div className="oh-breakdown-total">
              <span>Total Paid</span>
              <span>₹ {total.toLocaleString("en-IN")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Actions ── */}
      <div className="oh-card-footer">
        <button className="oh-expand-btn" onClick={() => setExpanded((v) => !v)}>
          {expanded ? <ChevronIcon down={false} /> : <ChevronIcon down />}
          {expanded ? "Hide Details" : "View Details"}
        </button>

        <div className="oh-actions">
          {order.status === "Delivered" && (
            <button className="oh-action-btn oh-rate-btn" onClick={() => onRate(order)}>
              <StarIcon size={13} />
              Rate
            </button>
          )}
          <button className="oh-action-btn oh-receipt-btn">
            <ReceiptIcon size={13} />
            Receipt
          </button>
          {order.status !== "Cancelled" && (
            <button className="oh-action-btn oh-reorder-btn">
              <ReorderIcon size={13} />
              Reorder
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════════════════ */
export default function OrderHistory() {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");
  const [ratingOrder, setRatingOrder] = useState(null);

  const filtered = useMemo(() => {
    let list = ALL_ORDERS;
    if (activeTab !== "All") list = list.filter((o) => o.status === activeTab);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (o) =>
          o.id.toLowerCase().includes(q) ||
          o.train.toLowerCase().includes(q) ||
          o.pnr.includes(q) ||
          o.items.some((i) => i.name.toLowerCase().includes(q))
      );
    }
    return list;
  }, [activeTab, search]);

  /* Stats */
  const stats = useMemo(() => ({
    total: ALL_ORDERS.length,
    delivered: ALL_ORDERS.filter((o) => o.status === "Delivered").length,
    spent: ALL_ORDERS.filter((o) => o.status !== "Cancelled").reduce((s, o) => s + calcTotal(o), 0),
    cancelled: ALL_ORDERS.filter((o) => o.status === "Cancelled").length,
  }), []);

  return (
    <div className="oh-page">

      {/* ── Header ── */}
      {/* <header className="oh-header">
        <div className="oh-header-inner">
          <div className="oh-brand">
            <div className="oh-brand-icon">
              <TrainIcon />
            </div>
            <div className="oh-brand-text">
              <span className="oh-brand-name">Train Bites</span>
              <span className="oh-brand-sub">Food Delivery</span>
            </div>
          </div>

          <div className="oh-header-right">
            <div className="oh-user-avatar">RK</div>
          </div>
        </div>
      </header> */}

      {/* ── Page Title ── */}
      <div className="oh-page-title-wrap">
        <div className="oh-page-title-inner">
          <div className="oh-page-title-text">
            <h1 className='CommonHeader TL'>Order <span>History</span></h1>
            <p>Track all your past food orders on trains</p>
          </div>

          {/* Stats Row */}
          <div className="oh-stats-row">
            <div className="oh-stat">
              <span className="oh-stat-value">{stats.total}</span>
              <span className="oh-stat-label">Total Orders</span>
            </div>
            <div className="oh-stat-divider" />
            <div className="oh-stat">
              <span className="oh-stat-value oh-stat-green">{stats.delivered}</span>
              <span className="oh-stat-label">Delivered</span>
            </div>
            <div className="oh-stat-divider" />
            <div className="oh-stat">
              <span className="oh-stat-value oh-stat-red">{stats.cancelled}</span>
              <span className="oh-stat-label">Cancelled</span>
            </div>
            <div className="oh-stat-divider" />
            <div className="oh-stat">
              <span className="oh-stat-value oh-stat-gold">₹ {stats.spent.toLocaleString("en-IN")}</span>
              <span className="oh-stat-label">Total Spent</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="oh-content">

        {/* Filters */}
        <div className="oh-filters">
          {/* Search */}
          <div className="oh-search-wrap">
            <SearchIcon size={15} />
            <input
              className="oh-search"
              type="text"
              placeholder="Search by order ID, train, PNR or dish…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button className="oh-search-clear" onClick={() => setSearch("")}>✕</button>
            )}
          </div>

          {/* Tabs */}
          <div className="oh-tabs">
            {TABS.map((tab) => {
              const count = tab === "All"
                ? ALL_ORDERS.length
                : ALL_ORDERS.filter((o) => o.status === tab).length;
              return (
                <button
                  key={tab}
                  className={`oh-tab${activeTab === tab ? " active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                  <span className="oh-tab-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="oh-empty">
            <PackageIcon size={56} />
            <h3>No orders found</h3>
            <p>Try adjusting your search or filter</p>
          </div>
        ) : (
          <div className="oh-list">
            {filtered.map((order, i) => (
              <OrderCard
                key={order.id}
                order={order}
                index={i}
                onRate={setRatingOrder}
              />
            ))}
          </div>
        )}
      </div>

      {/* Rating Modal */}
      {ratingOrder && (
        <RatingModal order={ratingOrder} onClose={() => setRatingOrder(null)} />
      )}
    </div>
  );
}
