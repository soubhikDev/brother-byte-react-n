import React, { useState } from 'react'
import './OfferCard.css'

const OfferCard = ({
  image = '/food-image.jpg',
  imageAlt = 'Delicious South Indian spread',
  discountAmount = '₹30',
  minOrder = '₹299',
  couponCode = 'SUM30',
  onOrderNow,
}) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(couponCode).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="OfferCard">
      {/* ── Badge ── */}
      <div className="OfferBadge">
        <span className="OfferBadgeIcon">🔥</span>
        <span>Limited Offer</span>
      </div>

      {/* ── Image ── */}
      <div className="OfferImageWrap">
        <img src={image} alt={imageAlt} className="OfferImage" />
        <div className="OfferImageOverlay" />
        <div className="OfferSavingsPill">
          <span className="SavingsAmount">{discountAmount}</span>
          <span className="SavingsLabel">OFF</span>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="OfferBody">
        <p className="OfferDescription">
          Get <strong>{discountAmount} OFF</strong> on orders above{' '}
          <strong>{minOrder}</strong>
        </p>

        {/* ── Coupon ── */}
        <div className="CouponRow">
          <div className="CouponBlock">
            <span className="CouponLabel">COUPON CODE</span>
            <span className="CouponCode">{couponCode}</span>
          </div>
          <button
            className={`CopyBtn ${copied ? 'CopyBtn--copied' : ''}`}
            onClick={handleCopy}
            aria-label="Copy coupon code"
          >
            {copied ? (
              <>
                <span className="CopyIcon">✓</span>
                <span>Copied!</span>
              </>
            ) : (
              <>
                <span className="CopyIcon">⧉</span>
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* ── CTA ── */}
        <button
          className="OrderNowBtn"
          onClick={onOrderNow}
          aria-label="Order Now"
        >
          <span>Order Now</span>
          <span className="BtnArrow">→</span>
        </button>
      </div>

      {/* ── Decorative dots ── */}
      <div className="CardDots CardDots--top" aria-hidden="true" />
      <div className="CardDots CardDots--bottom" aria-hidden="true" />
    </div>
  )
}

export default OfferCard
