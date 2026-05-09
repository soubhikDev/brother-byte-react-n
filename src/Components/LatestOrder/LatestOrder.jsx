import React, { useState, useEffect } from 'react'
import './LatestOrder.css'

export default function LatestOrder() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCards, setVisibleCards] = useState([])

  const latestOrders = [
    "Vijay Ordered food in CNB LTT SF HSPL at BHUSAVAL JN/BSL.",
    "Priya Ordered food in NDLS MAS SF EXP at NAGPUR/NGP.",
    "Rahul Ordered food in SHATABDI EXP at KANPUR/KNP.",
    "Anjali Ordered food in GARIB RATH EXP at BHOPAL/BPL.",
    "Amit Ordered food in RAJDHANI EXP at MUMBAI CST/CSTM.",
    "Sneha Ordered food in DURONTO EXP at DELHI/DLI.",
    "Karan Ordered food in TEJAS EXP at AHMEDABAD/ADI.",
    "Meera Ordered food in SHATABDI EXP at JAIPUR/JP."
  ]

  // Determine how many cards to show based on screen size
  const getCardsToShow = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 480) return 1
      if (window.innerWidth <= 768) return 2
      return 3
    }
    return 3 // Default for SSR
  }

  const [cardsToShow, setCardsToShow] = useState(getCardsToShow())

  useEffect(() => {
    const handleResize = () => {
      setCardsToShow(getCardsToShow())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const updateVisibleCards = () => {
      const newVisibleCards = []
      for (let i = 0; i < cardsToShow; i++) {
        const index = (currentIndex + i) % latestOrders.length
        newVisibleCards.push({
          order: latestOrders[index],
          index: index,
          delay: i * 200 // Stagger delay for each card
        })
      }
      setVisibleCards(newVisibleCards)
    }

    updateVisibleCards()
  }, [currentIndex, cardsToShow, latestOrders.length])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= latestOrders.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [latestOrders.length])

  const highlightClientName = (text) => {
    const parts = text.split(' ')
    const clientName = parts[0]
    const rest = parts.slice(1).join(' ')
    
    return (
      <span>
        <span className="client-name">{clientName}</span> {rest}
      </span>
    )
  }

  return (
    <div className="LatestOrderMain">
      <div className="LatestOrder_Wrapper">
        <div className="LatestOrder_Header">
          <h2>Latest Orders</h2>
        </div>
        <div className="LatestOrder_Carousel">
          {visibleCards.map((card, index) => (
            <div 
              key={`${card.index}-${currentIndex}`}
              className="LatestOrder_Slide"
              style={{
                animationDelay: `${card.delay}ms`
              }}
            >
              {highlightClientName(card.order)}
            </div>
          ))}
        </div>
        <div className="LatestOrder_Indicators">
          {latestOrders.map((_, index) => (
            <span 
              key={index} 
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}