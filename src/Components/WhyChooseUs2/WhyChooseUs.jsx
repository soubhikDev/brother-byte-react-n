import React from 'react'
import './WhyChooseUs.css'

const reasons = [
  {
    icon: '🤝',
    title: 'Trusted Partnership',
    description: 'We build long-term relationships with restaurants ensuring mutual growth and consistent quality.',
  },
  {
    icon: '🍱',
    title: 'Train Food Delivery',
    description: 'Exclusive access to deliver freshly prepared meals directly to passengers on the go.',
    featured: true,
  },
  {
    icon: '🏛️',
    title: 'IRCTC Authorized',
    description: 'Officially approved and authorized by IRCTC — India\'s most trusted railway catering body.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="WhyChooseUs">
      {/* decorative rings */}
      <div className="WhyChooseUs_ring" />
      <div className="WhyChooseUs_ring" />

      <div className="common_width WhyChooseUs_inner">

        {/* ── Left: Heading ── */}
        <div className="WhyChooseUs_left">
          <div className="tag">Our Advantage</div>
          <h2>
            Why Choose Us <span>Brother Byte?</span>
          </h2>
          <p>
            We connect quality restaurants with millions of train passengers across India — giving your brand the reach it deserves.
          </p>
          
        </div>

        {/* ── Right: Cards ── */}
        <div className="WhyChooseUs_cards">
          {reasons.map((item, index) => (
            <div
              key={index}
              className={`WhyChooseUs_card${item.featured ? ' featured' : ''}`}
            >
              <div className="WhyChooseUs_cardTop">
                <span className="WhyChooseUs_cardNum">0{index + 1}</span>
                <span className="WhyChooseUs_cardArrow">→</span>
              </div>

              <div className="WhyChooseUs_icon">
                <span>{item.icon}</span>
              </div>

              <div className="WhyChooseUs_cardText">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
