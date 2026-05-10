import React, { useState } from "react";
import "./CouponCard.css";
import { Gift } from "lucide-react";

const CouponCard = ({
  offerLabel = "OFFER VOUCHER",
  discountValue = "5%",
  discountUnit = "OFF",
  description = "Get Flat 5% Discount of Every Prepaid Order.",
  voucherCode = "PREPAID5",
  minOrder = "₹1",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(voucherCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="coupon-card">
      {/* Left Section */}
      <div className="coupon-left">
        <div className="coupon-gift-icon" aria-hidden="true">
          <Gift size={38} strokeWidth={2} />
        </div>

        <p className="coupon-offer-label">{offerLabel}</p>
        <h4 className="coupon-discount-value">
          {discountValue}
          <br />
          <span className="coupon-discount-unit">{discountUnit}</span>
        </h4>
        <p className="coupon-description">{description}</p>
      </div>

      {/* Divider */}
      <div className="coupon-divider">
        <div className="coupon-notch coupon-notch-top" />
        <div className="coupon-dashed-line" />
        <div className="coupon-notch coupon-notch-bottom" />
      </div>

      {/* Right Section */}
      <div className="coupon-right">
        <p className="coupon-discount-title">DISCOUNT</p>

        <div className="coupon-code-box">
          <p className="coupon-code-label">VOUCHER CODE</p>
          <p className="coupon-code-value">{voucherCode}</p>
        </div>

        <p className="coupon-min-order">Min Order {minOrder}</p>

        <button
          className={`coupon-copy-btn ${copied ? "copied" : ""}`}
          onClick={handleCopy}
          aria-label="Copy voucher code"
        >
          {copied ? "COPIED!" : "COPY"}
        </button>
      </div>
    </div>
  );
};

export default CouponCard;
