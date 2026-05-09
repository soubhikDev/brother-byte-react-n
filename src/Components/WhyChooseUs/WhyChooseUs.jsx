import React from 'react'
import './WhyChooseUs.css'
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';

const features = [
  {
    title: 'All Major Trains and Stations Covered',
    description: 'We serve all major trains and stations across India, ensuring your favorite meals are always within reach.',
  },
  {
    title: 'FSSAI Approved Restaurants',
    description: 'Partnering with FSSAI-approved restaurants, we offer diverse cuisines, guaranteeing a satisfying meal every time.',
  },
  {
    title: 'Choices of the Menu',
    description: 'Our extensive menu caters to all tastes, ensuring every passenger finds their perfect meal.',
  },
  {
    title: 'Best Quality Food at Affordable Prices',
    description: 'Enjoy high-quality meals at pocket-friendly prices, making your journey delightful and economical.',
  },
  {
    title: 'Timely Food Delivery On Train Seats',
    description: 'Experience fast, hassle-free delivery right to your seat, ensuring your meal is fresh and on time.',
  },
  {
    title: 'Trusted & Approved',
    description: 'Brother Byte is a trusted IRCTC-approved food supplier, committed to delivering excellence in every meal.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="WhyChooseUsSection">
      <div className="WhyChooseUsContent common_width">
        <div className="WhyChooseUsHeader">
          <p className="WhyChooseUsIntro">Why Choose Us</p>
          <h1 className="CommonHeader">Why Choose Us To Food in Train</h1>
          <p className="WhyChooseUsSubtext">
            Brother Byte delivers delicious train meals with trusted quality, wide coverage, and on-time service across India.
          </p>
        </div>
        <div className="WhyChooseUsGrid">
          {features.map((item, index) => (
            <article key={index} className="WhyChooseUsCard">
              <div className="WhyChooseUsCardTop">
                <span className="WhyChooseUsTag"><CheckCircleTwoToneIcon /></span>
                <span className="WhyChooseUsCount">0{index + 1}</span>
              </div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
