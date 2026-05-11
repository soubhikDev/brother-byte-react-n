import React, { useState, useRef, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import RestaurantCard from '../../Components/RestaurantCard/RestaurantCard'
import './RestaurantPnr.css'

/* ── Inline SVG Icons ── */
const IconTrain = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="3" width="16" height="13" rx="3"/>
    <path d="M8 19h8M10 19l-2 2M14 19l2 2M4 10h16"/>
    <circle cx="8.5" cy="13.5" r="1" fill="currentColor" stroke="none"/>
    <circle cx="15.5" cy="13.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
)

const IconMapPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
    strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 13-8 13S4 16 4 10a8 8 0 1 1 16 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
    strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
)

const IconTimer = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
    strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 2h4M12 14l-3-3M12 6a8 8 0 1 0 0 16 8 8 0 0 0 0-16z"/>
  </svg>
)

const IconArrowLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
    strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6"/>
  </svg>
)

const IconSearch = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35"/>
  </svg>
)

const IconUtensils = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>
  </svg>
)

/* ── Sample Data ── */
const RestaurantData = [
  {
    trainName: 'MFP ST EXPRESS (19054)',
    station: 'AGRA CANTT',
    stopeg: 'ETA: 16:30 | STA: 16:35 | Halt: 5 Min',
    image: '',
    restaurant: [
      {
        id: 1,
        name: "Spice Garden",
        station: "Agra Cantt",
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
        station: "Agra Cantt",
        cuisine: ["Mughlai", "Chinese"],
        rating: 4.2,
        minOrder: 199,
        deliveryTime: "30–40 min",
        type: "nonveg",
        img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&q=80",
      },
      {
        id: 3,
        name: "Green Bowl",
        station: "Agra Cantt",
        cuisine: ["North Indian"],
        rating: 4.7,
        minOrder: 99,
        deliveryTime: "20–30 min",
        type: "veg",
        img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80",
      },
    ],
  },
  {
    trainName: 'RAJDHANI EXP (12951)',
    station: 'MATHURA JN',
    stopeg: 'ETA: 18:10 | STA: 18:15 | Halt: 5 Min',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80',
    restaurant: [
      {
        id: 4,
        name: "Tandoor Nights",
        station: "Mathura Jn",
        cuisine: ["Punjabi", "Tandoori"],
        rating: 4.1,
        minOrder: 149,
        deliveryTime: "25–35 min",
        type: "nonveg",
        img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&q=80",
      },
      {
        id: 5,
        name: "The Dhaba Co.",
        station: "Mathura Jn",
        cuisine: ["North Indian", "South Indian"],
        rating: 4.6,
        minOrder: 129,
        deliveryTime: "20–30 min",
        type: "both",
        img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&q=80",
      },
    ],
  },
  {
    trainName: 'SHATABDI EXP (12002)',
    station: 'GWALIOR',
    stopeg: 'ETA: 20:45 | STA: 20:50 | Halt: 5 Min',
    image: 'https://images.unsplash.com/photo-1526481280690-486d45b3d4a5?w=900&q=80',
    restaurant: [
      {
        id: 6,
        name: "Fusion Bites",
        station: "Gwalior",
        cuisine: ["Asian Fusion", "Chinese"],
        rating: 4.3,
        minOrder: 249,
        deliveryTime: "25–35 min",
        type: "both",
        img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=500&q=80",
      },
    ],
  },
  {
    trainName: 'SHATABDI EXP (12002)',
    station: 'GWALIOR',
    stopeg: 'ETA: 20:45 | STA: 20:50 | Halt: 5 Min',
    image: 'https://images.unsplash.com/photo-1526481280690-486d45b3d4a5?w=900&q=80',
    restaurant: [
      {
        id: 6,
        name: "Fusion Bites",
        station: "Gwalior",
        cuisine: ["Asian Fusion", "Chinese"],
        rating: 4.3,
        minOrder: 249,
        deliveryTime: "25–35 min",
        type: "both",
        img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=500&q=80",
      },
    ],
  },
  {
    trainName: 'SHATABDI EXP (12002)',
    station: 'GWALIOR',
    stopeg: 'ETA: 20:45 | STA: 20:50 | Halt: 5 Min',
    image: 'https://images.unsplash.com/photo-1526481280690-486d45b3d4a5?w=900&q=80',
    restaurant: [
      {
        id: 6,
        name: "Fusion Bites",
        station: "Gwalior",
        cuisine: ["Asian Fusion", "Chinese"],
        rating: 4.3,
        minOrder: 249,
        deliveryTime: "25–35 min",
        type: "both",
        img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=500&q=80",
      },
    ],
  },
  {
    trainName: 'SHATABDI EXP (12002)',
    station: 'GWALIOR',
    stopeg: 'ETA: 20:45 | STA: 20:50 | Halt: 5 Min',
    image: 'https://images.unsplash.com/photo-1526481280690-486d45b3d4a5?w=900&q=80',
    restaurant: [
      {
        id: 6,
        name: "Fusion Bites",
        station: "Gwalior",
        cuisine: ["Asian Fusion", "Chinese"],
        rating: 4.3,
        minOrder: 249,
        deliveryTime: "25–35 min",
        type: "both",
        img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=500&q=80",
      },
    ],
  },
]

/* ── Halt info parser → chips ── */
function HaltChips({ raw }) {
  const parts = raw.split('|').map(s => s.trim())
  const icons = [<IconClock />, <IconTimer />, <IconTimer />]
  const green = [false, false, true]
  return (
    <div className="halt_info">
      {parts.map((part, i) => (
        <span key={i} className={`halt_chip${green[i] ? ' green' : ''}`}>
          {icons[i]}
          {part}
        </span>
      ))}
    </div>
  )
}

/* ══════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════ */
export default function RestaurantPnr() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const searchType  = searchParams.get('type')  || 'PNR'
  const searchValue = searchParams.get('value') || ''

  const totalRestaurants = RestaurantData.reduce(
    (acc, g) => acc + g.restaurant.length, 0
  )
  const totalStations = RestaurantData.length

  const [selectedStation, setSelectedStation] = useState('')
  const [carouselIndex, setCarouselIndex] = useState(0)
  const groupRefs = useRef([])
  const visibleCards = 4
  const maxCarouselIndex = Math.max(0, totalStations - visibleCards)
  const carouselGap = 18
  const autoplayInterval = 3500

  const displayedData = selectedStation
    ? RestaurantData.filter((item) => item.station === selectedStation)
    : RestaurantData

  const stationIndexMap = React.useMemo(
    () => RestaurantData.reduce((map, item, idx) => {
      if (!(item.station in map)) {
        map[item.station] = idx
      }
      return map
    }, {}),
    []
  )

  useEffect(() => {
    if (!selectedStation) return
    const activeIndex = stationIndexMap[selectedStation]
    const groupEl = groupRefs.current[activeIndex]
    if (groupEl) {
      groupEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [selectedStation, stationIndexMap])

  useEffect(() => {
    if (selectedStation) return
    if (RestaurantData.length <= visibleCards) return

    const interval = setInterval(() => {
      setCarouselIndex((current) =>
        current >= maxCarouselIndex ? 0 : current + 1
      )
    }, autoplayInterval)

    return () => clearInterval(interval)
  }, [selectedStation, maxCarouselIndex, autoplayInterval])

  const scrollToStation = (station, index) => {
    setSelectedStation(station)
    const targetIndex = Math.min(Math.max(0, index), maxCarouselIndex)
    setCarouselIndex(targetIndex)
  }

  const goPrev = () => setCarouselIndex((value) => Math.max(0, value - 1))
  const goNext = () => setCarouselIndex((value) => Math.min(maxCarouselIndex, value + 1))

  return (
    <div className="RestaurantPnr_wrpr">

      {/* ── Hero ── */}
      <div className="RestaurantPnr_hero">
        <div className="common_width RestaurantPnr_hero_inner">

          <div className="RestaurantPnr_hero_content">
            <div className="hero_eyebrow">
              <span className="hero_eyebrow_dot" />
              Order Food on Train
            </div>
            <h1 className="RestaurantPnr_hero_title">
              Find Your<br />Perfect Meal
            </h1>
            <p className="RestaurantPnr_hero_subtitle">
              Searching by <strong>{searchType}</strong>
              <span className="highlight">{searchValue || '—'}</span>
            </p>
          </div>

          {searchValue && (
            <div className="hero_stats">
              <div className="hero_stat_pill">
                <span className="hero_stat_num">{totalStations}</span>
                <span className="hero_stat_lbl">Stations</span>
              </div>
              <div className="hero_stat_pill">
                <span className="hero_stat_num">{totalRestaurants}</span>
                <span className="hero_stat_lbl">Restaurants</span>
              </div>
              <div className="hero_stat_pill">
                <span className="hero_stat_num">20<span style={{fontSize:'1rem'}}>+</span></span>
                <span className="hero_stat_lbl">Cuisines</span>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* ── Content ── */}
      <div className="RestaurantPnr_content">
        {searchValue && (
          <div className="common_width station_carousel_wrap">
            <div className="station_carousel_header">
              <div>
                <h2>Stations on your route</h2>
                <p>{RestaurantData.length} stops with food delivery</p>
              </div>
              <div className="station_carousel_controls">
                {selectedStation && (
                  <button
                    className="station_filter_clear"
                    onClick={() => {
                      setSelectedStation('')
                      setCarouselIndex(0)
                    }}
                  >
                    Show all stations
                  </button>
                )}
                <button
                  className="carousel_nav"
                  onClick={goPrev}
                  disabled={carouselIndex === 0}
                  aria-label="Previous stations"
                >
                  ‹
                </button>
                <button
                  className="carousel_nav"
                  onClick={goNext}
                  disabled={carouselIndex === maxCarouselIndex}
                  aria-label="Next stations"
                >
                  ›
                </button>
              </div>
            </div>

            <div className="station_carousel_view" >
              <div className="station_carousel_track" style={{ transform: `translateX(calc(-${carouselIndex} * ((100% - 54px) / 4 + 18px)))`,}}>
                {RestaurantData.map((item, index) => {
                  const [eta, sta, halt] = item.stopeg.split('|').map((part) => part.trim())
                  return (
                    <button
                      key={`${item.station}-${index}`}
                      type="button"
                      className={`station_card${selectedStation === item.station ? ' active' : ''}`}
                      onClick={() => scrollToStation(item.station, index)}
                    >
                      <div
                        className="station_card_image"
                        style={{ backgroundImage: `url(${item.image})` }}
                        aria-hidden="true"
                      />
                      <div className="station_card_body">
                        <div className="station_card_title">
                          <strong>{item.station}</strong>
                          <span>{item.trainName}</span>
                        </div>
                        <div className="station_card_time">
                          <span>{eta}</span>
                          <span>{sta}</span>
                          <span>{halt}</span>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        <div className="common_width RestaurantPnr_content_inner">

          {searchValue ? (
            displayedData.map((item, index) => (
              <div
                key={item.station}
                ref={(el) => {
                  const originalIndex = stationIndexMap[item.station]
                  groupRefs.current[originalIndex] = el
                }}
                className="RestaurantPnr_group"
              >

                {/* Train / Station Header */}
                <div className="RestaurantPnr_group_header">
                  <div className="train_info">
                    <div className="train_header_row">
                      <div className="train_icon" aria-hidden="true">
                        <IconTrain />
                      </div>
                      <h2 className="train_name">{item.trainName}</h2>
                    </div>
                    <div className="train_meta">
                      <span className="station_badge">
                        <IconMapPin />
                        {item.station}
                      </span>
                      <HaltChips raw={item.stopeg} />
                    </div>
                  </div>

                  <div className="restaurants_count_badge"
                    aria-label={`${item.restaurant.length} restaurants available`}>
                    <span>{item.restaurant.length}</span>
                    <p>Restaurants</p>
                  </div>
                </div>

                {/* Restaurant Cards */}
                <RestaurantCard restaurants={item.restaurant} />

              </div>
            ))
          ) : (
            <div className="RestaurantPnr_empty" role="alert">
              <div className="empty_icon" aria-hidden="true">
                <IconSearch />
              </div>
              <h2>No Results Found</h2>
              <p>Please go back and enter a valid {searchType} to find restaurants near your train.</p>
            </div>
          )}

        </div>
      </div>

      {/* ── Footer ── */}
      <div className="RestaurantPnr_footer common_width">
        <button
          className="RestaurantPnr_back_btn"
          onClick={() => navigate('/')}
          aria-label="Back to Home"
        >
          <IconArrowLeft />
          Back to Home
        </button>
      </div>

    </div>
  )
}