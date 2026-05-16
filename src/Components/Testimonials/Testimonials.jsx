import React, { useEffect, useState } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Priya Sharma',
    subject: 'Best Train Food Experience',
    description: 'The food arrived hot and on time. The train meal options were excellent and the ordering process was super easy.',
    rating: 5,
    initials: 'PS',
    tag: 'Top Reviewer',
  },
  {
    name: 'Amit Verma',
    subject: 'Delicious and Affordable',
    description: 'I loved the variety and the taste. Everything was affordable and delivered right to my seat during the journey.',
    rating: 5,
    initials: 'AV',
    tag: 'Regular Customer',
  },
  {
    name: 'Neha Singh',
    subject: 'Reliable Train Delivery',
    description: 'Very reliable service with a friendly delivery partner. The meal was fresh and the menu had good choices.',
    rating: 5,
    initials: 'NS',
    tag: 'Verified User',
  },
  {
    name: 'Rohit Mehta',
    subject: 'Smooth Ordering Process',
    description: 'The app was easy to use and the order tracking worked well. Food reached my seat without any delay.',
    rating: 5,
    initials: 'RM',
    tag: 'Loyal Customer',
  },
  {
    name: 'Priya Sharma',
    subject: 'Best Train Food Experience',
    description: 'The food arrived hot and on time. The train meal options were excellent and the ordering process was super easy.',
    rating: 5,
    initials: 'PS',
    tag: 'Top Reviewer',
  },
  {
    name: 'Amit Verma',
    subject: 'Delicious and Affordable',
    description: 'I loved the variety and the taste. Everything was affordable and delivered right to my seat during the journey.',
    rating: 5,
    initials: 'AV',
    tag: 'Regular Customer',
  },
  {
    name: 'Neha Singh',
    subject: 'Reliable Train Delivery',
    description: 'Very reliable service with a friendly delivery partner. The meal was fresh and the menu had good choices.',
    rating: 5,
    initials: 'NS',
    tag: 'Verified User',
  },
  {
    name: 'Rohit Mehta',
    subject: 'Smooth Ordering Process',
    description: 'The app was easy to use and the order tracking worked well. Food reached my seat without any delay.',
    rating: 5,
    initials: 'RM',
    tag: 'Loyal Customer',
  },
]

const CARDS_PER_GROUP = 2

export default function Testimonials() {
  const [isMobile, setIsMobile] = useState(false)
  const [activeGroup, setActiveGroup] = useState(0)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 640)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const cardsToShow = isMobile ? 1 : CARDS_PER_GROUP
  const groupCount = Math.ceil(testimonials.length / cardsToShow)

  useEffect(() => {
    if (activeGroup >= groupCount) setActiveGroup(0)
  }, [groupCount, activeGroup])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveGroup((prev) => (prev + 1) % groupCount)
    }, 4500)
    return () => clearInterval(interval)
  }, [groupCount])

  const handlePrev = () => setActiveGroup((prev) => (prev - 1 + groupCount) % groupCount)
  const handleNext = () => setActiveGroup((prev) => (prev + 1) % groupCount)

  // Slice testimonials into groups
  const groups = []
  for (let i = 0; i < testimonials.length; i += cardsToShow) {
    groups.push(testimonials.slice(i, i + cardsToShow))
  }

  return (
    <section className="TestimonialsSection">
      {/* decorative blobs */}
      <span className="T_Blob T_Blob--left" aria-hidden="true" />
      <span className="T_Blob T_Blob--right" aria-hidden="true" />

      <div className="TestimonialsContent common_width">
        <div className="TestimonialsHeader">
          <p className="CommonEyebrow">Testimonials</p>
          <h1 className="CommonHeader">
            Our Happy Customers — <span>Real Stories</span>
          </h1>
          <p className="CommonPera">
            Thousands of travellers trust us every day. Here's what they say.
          </p>
        </div>

        <div className="TestimonialsPanel">
          <button className="TestimonialsNavButton" onClick={handlePrev} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>

          <div className="TestimonialsCarousel">
            <div
              className="TestimonialsTrack"
              style={{ transform: `translateX(-${activeGroup * 100}%)` }}
            >
              {groups.map((group, gi) => (
                <div className="TestimonialsGroup" key={gi}>
                  {group.map((item) => (
                    <article className="TestimonialCard" key={item.name}>
                      <div className="TC_Top">
                        <div className="TestimonialAvatar">{item.initials}</div>
                        <div className="TC_Meta">
                          <h2>{item.name}</h2>
                          <span className="TC_Subject">{item.subject}</span>
                          <span className="TC_Tag">{item.tag}</span>
                        </div>
                        <div className="TC_Quote">"</div>
                      </div>
                      <p className="TC_Desc">{item.description}</p>
                      <div className="TC_Footer">
                        <div className="TestimonialRating">
                          {Array.from({ length: item.rating }, (_, i) => (
                            <span key={i} className="Star">★</span>
                          ))}
                        </div>
                        <span className="TC_Verified">✔ Verified Purchase</span>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <button className="TestimonialsNavButton" onClick={handleNext} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>

        <div className="TestimonialsDots">
          {groups.map((_, idx) => (
            <button
              key={idx}
              className={`TestimonialsDot${idx === activeGroup ? ' active' : ''}`}
              onClick={() => setActiveGroup(idx)}
              aria-label={`Group ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}