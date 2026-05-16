import { useState, useCallback } from "react";
import "./Payment.css";
import phonepe from "../../Assets/phonepe.webp";
import gpay from "../../assets/gpay.webp";
import visa from "../../assets/visa.webp";
import mastercard from "../../assets/mastercard.png";
import rupay from "../../assets/rupay.webp";
import upi from "../../assets/upi.webp";
import paytm from "../../assets/paytm.webp";


/* ─────────────────────────────────────────────────────────────
   LEFT PANEL DATA (original Payment Gateway)
───────────────────────────────────────────────────────────── */
const IconShield = ({ size = 16, color = "white", strokeWidth = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconLock = ({ size = 13, color = "currentColor", strokeWidth = 2.5 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round">
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

/* ─────────────────────────────────────────────────────────────
   RIGHT PANEL DATA (Brother Byte Order Flow)
───────────────────────────────────────────────────────────── */
const COUPONS = [
  { code: "RAJBHOG50", desc: "50% off on first order (max ₹100)", icon: "🎉", type: "percent", value: 50, max: 100 },
  { code: "TRAIN30",   desc: "Flat ₹30 off on train orders",        icon: "🚂", type: "flat",    value: 30         },
  { code: "WELCOME20", desc: "20% off for new customers",           icon: "👋", type: "percent", value: 20, max: 60  },
  { code: "NDLS10",    desc: "₹10 off from New Delhi station",       icon: "🏛️", type: "flat",    value: 10         },
];

const FOOD_ITEM = { name: "Dal Makhani Thali", meta: "1× Full Thali · Serves 1", icon: "🍛", qty: 1, basePrice: 320 };
const GST_RATE  = 0.05;
const DELIVERY  = 37;

function calcDiscount(coupon, sub) {
  if (!coupon) return 0;
  if (coupon.type === "flat")    return Math.min(coupon.value, sub);
  if (coupon.type === "percent") return Math.min(Math.round(sub * coupon.value / 100), coupon.max ?? Infinity);
  return 0;
}

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────── */
export default function Payment() {

  /* ── Coupon state ── */
  const [showCoupon,    setShowCoupon]    = useState(false);
  const [couponInput,   setCouponInput]   = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponMsg,     setCouponMsg]     = useState(null);

  /* ── Bill state ── */
  const [showBill, setShowBill] = useState(false);

  /* ── Payment state ── */
  const [selectedPay, setSelectedPay] = useState("cod");
  const [ordered,     setOrdered]     = useState(false);

  /* ── Calculations ── */
  const subTotal = FOOD_ITEM.basePrice + DELIVERY;
  const discount = calcDiscount(appliedCoupon, subTotal);
  const taxable  = subTotal - discount;
  const gst      = Math.round(taxable * GST_RATE);
  const total    = taxable + gst;

  /* ── Coupon logic ── */
  function applyCouponCode(code) {
    const found = COUPONS.find(c => c.code === code.toUpperCase().trim());
    if (!found) {
      setCouponMsg({ type: "error", text: "Invalid coupon code. Please try again." });
      return;
    }
    setAppliedCoupon(found);
    setCouponMsg({ type: "success", text: `🎉 "${found.code}" applied! You saved ₹${calcDiscount(found, subTotal)}` });
  }

  function removeCoupon() {
    setAppliedCoupon(null);
    setCouponMsg(null);
    setCouponInput("");
  }

  return (
    <div className="payment-page">
      <div className="gateway-wrapper">

        {/* ══════════════════════════════════════════
            LEFT PANEL — original payment gateway UI
        ══════════════════════════════════════════ */}
        <div className="left-panel">
          <div className="hero-text">
            <h2>
              Fast. Secure.
              <span>Hassle-free<br />Payments</span>
            </h2>
            <p>Pay safely using your preferred payment method and enjoy your meal.</p>

            <div className="feature-grid">
              <div className="feature-card">
                <div className="icon"><IconShield size={18} /></div>
                <h3>100% Secure</h3>
                <p>Your transactions are safe and encrypted</p>
              </div>
              <div className="feature-card">
                <div className="icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <h3>Instant Payment</h3>
                <p>Quick payments for faster order delivery</p>
              </div>
              <div className="feature-card">
                <div className="icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                  </svg>
                </div>
                <h3>Multiple Options</h3>
                <p>UPI, Cards, Wallets &amp; Net Banking</p>
              </div>
              <div className="feature-card">
                <div className="icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                    <path d="M20 12V22H4V12" />
                    <path d="M22 7H2v5h20V7z" />
                    <path d="M12 22V7" />
                    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                  </svg>
                </div>
                <h3>Best Offers</h3>
                <p>Enjoy exciting cashback and bank offers</p>
              </div>
            </div>

            <div className="security-bar">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <p>Your payment details are protected by industry-leading security.</p>
              <div className="badges">
                <div className="badge">PCI<br />DSS</div>
                <div className="badge">SSL<br />SECURED</div>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            RIGHT PANEL — Brother Byte order flow
        ══════════════════════════════════════════ */}
        <div className="right-panel rp-scroll">

          {/* ── Header ── */}
          <div className="rp-header">
            <div className="rp-journey-banner">
              <div className="rp-journey-title">Royal Recipe, New Delhi</div>
              <div className="rp-journey-chips">
                <div className="rp-jchip"><div className="rp-jchip-dot"></div>20 May 2026</div>
                <div className="rp-jchip"><div className="rp-jchip-dot"></div>03294 · NDLS PNBE SPL</div>
              </div>
            </div>
          </div>

          {/* ── Train Strip ── */}
          <div className="rp-train-strip">
            <span className="rp-train-icon">🚂</span>
            <div className="rp-track-line"></div>
            <div className="rp-station-badge">NDLS → PNBE</div>
            <div className="rp-track-line"></div>
            <span style={{ fontSize: 13, color: "#DC143C", fontWeight: 600 }}>Platform Ready</span>
          </div>

          <div className="rp-body">

            {/* ── Journey Details ── */}
            <div className="rp-card">
              <div className="rp-card-header">
                <div className="rp-card-icon">🎫</div>
                <div className="rp-card-title">Journey Details</div>
              </div>
              <div className="rp-card-body">
                <div className="rp-info-grid">
                  <div className="rp-info-item">
                    <div className="rp-info-label">Arriving On</div>
                    <div className="rp-info-value rp-highlight">14:15 · 20 May</div>
                  </div>
                  <div className="rp-info-item">
                    <div className="rp-info-label">Departure</div>
                    <div className="rp-info-value">16:26 / 13:30</div>
                  </div>
                  <div className="rp-info-item">
                    <div className="rp-info-label">Train</div>
                    <div className="rp-info-value">03294</div>
                  </div>
                  <div className="rp-info-item">
                    <div className="rp-info-label">Route</div>
                    <div className="rp-info-value">NDLS PNBE SPL</div>
                  </div>
                </div>
                <div className="rp-coach-row">
                  <div className="rp-coach-badge">
                    <div className="rp-coach-badge-label">Coach</div>
                    <div className="rp-coach-badge-value">M7</div>
                  </div>
                  <div className="rp-coach-badge">
                    <div className="rp-coach-badge-label">Berth</div>
                    <div className="rp-coach-badge-value">79</div>
                  </div>
                </div>
                <div className="rp-pnr-row">
                  <div className="rp-pnr-label">PNR NUMBER</div>
                  <div className="rp-pnr-value">2517664945</div>
                </div>
              </div>
            </div>

            {/* ── Passenger Details ── */}
            <div className="rp-card">
              <div className="rp-card-header">
                <div className="rp-card-icon">👤</div>
                <div className="rp-card-title">Passenger Details</div>
              </div>
              <div className="rp-card-body">
                <div className="rp-form-grid">
                  <div className="rp-field">
                    <label>Full Name</label>
                    <input type="text" placeholder="Your full name" />
                  </div>
                  <div className="rp-field">
                    <label>Email Address</label>
                    <input type="email" placeholder="your@email.com" />
                  </div>
                  <div className="rp-field">
                    <label>Phone Number</label>
                    <div className="rp-phone-wrap">
                      <div className="rp-phone-flag">🇮🇳</div>
                      <input type="tel" placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>
                  <div className="rp-field">
                    <label>Alternate Phone</label>
                    <input type="tel" placeholder="Optional" />
                  </div>
                  <div className="rp-field rp-full">
                    <label>Special Instructions</label>
                    <textarea placeholder="Any dietary preferences or notes... (optional)"></textarea>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Offers Button ── */}
            <button className="rp-offers-btn" onClick={() => { setShowCoupon(v => !v); setCouponMsg(null); }}>
              <span>🏷️</span>
              {showCoupon ? "HIDE OFFERS & DISCOUNTS" : "VIEW OFFERS & DISCOUNTS FOR YOU"}
              <span style={{ marginLeft: 4 }}>{showCoupon ? "↑" : "→"}</span>
            </button>

            {/* ── Coupon Panel ── */}
            {showCoupon && (
              <div className="rp-coupon-panel rp-slide-down">
                <div className="rp-coupon-panel-header">
                  <div className="rp-coupon-panel-title">🎟️ Apply Coupon</div>
                  <button className="rp-coupon-close" onClick={() => setShowCoupon(false)}>✕</button>
                </div>
                <div className="rp-coupon-panel-body">
                  <div className="rp-coupon-input-row">
                    <input
                      type="text"
                      placeholder="Enter coupon code"
                      value={couponInput}
                      onChange={e => { setCouponInput(e.target.value); setCouponMsg(null); }}
                    />
                    <button
                      className="rp-apply-btn"
                      onClick={() => couponInput.trim() && applyCouponCode(couponInput)}
                    >APPLY</button>
                  </div>

                  {couponMsg && (
                    <div className={`rp-coupon-msg ${couponMsg.type}`}>
                      {couponMsg.type === "success" ? "✅" : "❌"} {couponMsg.text}
                      {appliedCoupon && (
                        <button onClick={removeCoupon} style={{ marginLeft: "auto", background: "none", border: "none", color: "#1a7a3c", fontWeight: 700, cursor: "pointer", fontSize: 12 }}>
                          Remove
                        </button>
                      )}
                    </div>
                  )}

                  <div className="rp-available-coupons-title">Available Offers</div>
                  <div className="rp-coupon-list">
                    {COUPONS.map(c => {
                      const isApplied = appliedCoupon?.code === c.code;
                      return (
                        <div
                          key={c.code}
                          className={`rp-coupon-item ${isApplied ? "rp-applied" : ""}`}
                          onClick={() => {
                            if (isApplied) { removeCoupon(); return; }
                            setAppliedCoupon(c);
                            setCouponInput(c.code);
                            setCouponMsg({ type: "success", text: `🎉 "${c.code}" applied! You saved ₹${calcDiscount(c, subTotal)}` });
                          }}
                        >
                          <div className="rp-coupon-icon">{c.icon}</div>
                          <div className="rp-coupon-info">
                            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                              <span className="rp-coupon-code">{c.code}</span>
                              {isApplied && <span className="rp-coupon-applied-badge">✓ Applied</span>}
                            </div>
                            <div className="rp-coupon-desc">{c.desc}</div>
                          </div>
                          <div className="rp-coupon-discount">−₹{calcDiscount(c, subTotal)}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* ── Amount Card ── */}
            <div className="rp-amount-card" onClick={() => setShowBill(v => !v)}>
              <div className="rp-amount-left">
                <div className="rp-amount-label">Total Amount Payable</div>
                <div className="rp-amount-sub">1 item · {appliedCoupon ? "Coupon applied" : "no coupon"}</div>
                <div className="rp-amount-tap-hint">👆 Tap to see bill details</div>
              </div>
              <div className="rp-amount-right-group">
                <div className="rp-amount-right">
                  <div className="rp-currency-sym">₹</div>
                  <div className="rp-amount-value">{total}</div>
                </div>
                <div className={`rp-amount-chevron ${showBill ? "rp-open" : ""}`}>▾</div>
              </div>
            </div>

            {/* ── Bill Details ── */}
            {showBill && (
              <div className="rp-bill-panel rp-slide-down">
                <div className="rp-bill-panel-header">
                  <div className="rp-card-icon">🧾</div>
                  <div className="rp-bill-panel-title">Bill Details</div>
                </div>
                <div className="rp-bill-panel-body">
                  <div className="rp-bill-food-item">
                    <div className="rp-bill-food-icon">{FOOD_ITEM.icon}</div>
                    <div className="rp-bill-food-info">
                      <div className="rp-bill-food-name">{FOOD_ITEM.name}</div>
                      <div className="rp-bill-food-meta">{FOOD_ITEM.meta}</div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
                      <div className="rp-bill-food-qty">×{FOOD_ITEM.qty}</div>
                      <div className="rp-bill-food-price">₹{FOOD_ITEM.basePrice}</div>
                    </div>
                  </div>

                  {[
                    { label: "Item Subtotal",      value: `₹${FOOD_ITEM.basePrice}` },
                    { label: "Delivery Charges",   value: `₹${DELIVERY}` },
                    ...(discount > 0 ? [{ label: `🏷️ Coupon (${appliedCoupon?.code})`, value: `−₹${discount}`, cls: "rp-discount" }] : []),
                    { label: "GST (5%)",           value: `₹${gst}` },
                    { label: "Total Payable",      value: `₹${total}`, cls: "rp-total" },
                  ].map((row, i) => (
                    <div key={i} className={`rp-bill-row ${row.cls || ""}`}>
                      <div className="rp-bill-row-label">{row.label}</div>
                      <div className="rp-bill-row-value">{row.value}</div>
                    </div>
                  ))}

                  {discount > 0 && (
                    <div className="rp-savings-badge">
                      <span style={{ fontSize: 18 }}>🎊</span>
                      <div className="rp-savings-badge-text">You saved ₹{discount} on this order!</div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ── Payment Method ── */}
            <div className="rp-card">
              <div className="rp-card-header">
                <div className="rp-card-icon">💳</div>
                <div className="rp-card-title">Payment Method</div>
              </div>
              <div className="rp-card-body">
                {[
                  { id: "cod",    label: "Cash on Delivery", right: <span style={{ fontSize: 18 }}>💵</span> },
                  { id: "online", label: "Pay Online", right: (
                    <div className="rp-pay-logos">
                      <span className="rp-pay-logo "><img src={upi} alt="" /></span>
                      <span className="rp-pay-logo "><img src={gpay} alt="" /></span>
                      <span className="rp-pay-logo "><img src={paytm} alt="" /></span>
                      <span className="rp-pay-logo "><img src={phonepe} alt="" /></span>
                      <span className="rp-pay-logo "><img src={mastercard} alt="" /></span>
                      <span className="rp-pay-logo "><img src={visa} alt="" /></span>
                      <span className="rp-pay-logo "><img src={rupay} alt="" /></span>

                    </div>
                  )},
                ].map(opt => (
                  <div
                    key={opt.id}
                    className={`rp-pay-option ${selectedPay === opt.id ? "rp-selected" : ""}`}
                    onClick={() => setSelectedPay(opt.id)}
                  >
                    <div className="rp-pay-radio"><div className="rp-pay-radio-dot"></div></div>
                    <div className="rp-pay-name">{opt.label}</div>
                    {opt.right}
                  </div>
                ))}
              </div>
            </div>

            {/* ── T&C ── */}
            <div className="rp-tc-row">
              <div className="rp-tc-box"><span className="rp-tc-check">✓</span></div>
              <div className="rp-tc-text">I accept the <a href="/terms-conditions" target="_blank" rel="noopener noreferrer" className="rp-tc-link">Terms &amp; Conditions</a> of Brother Byte</div>
            </div>

            {/* ── Place Order Button ── */}
            <button className="rp-place-btn" onClick={() => setOrdered(true)}>
              <div className="rp-btn-content">
                <span className="rp-btn-icon">{ordered ? "✅" : "🍽️"}</span>
                <span>{ordered ? "ORDER PLACED!" : "PLACE ORDER"}</span>
                <span className="rp-cart-badge">₹{total}</span>
              </div>
            </button>

          </div>{/* end rp-body */}
        </div>{/* end right-panel */}
      </div>{/* end gateway-wrapper */}
    </div>
  );
}