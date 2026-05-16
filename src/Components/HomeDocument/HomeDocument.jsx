import React, { useState } from 'react'
import './HomeDocument.css'

const HomeDocument = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const documentBlocks = [
    {
      id: 1,
      icon: '🚂',
      tag: 'IRCTC Partner',
      title: 'Order Food in Trains Online From',
      highlight: 'IRCTC Trusted Partner',
      content:
        'Brother Byte is India\'s leading railway online food delivery service provider and IRCTC\'s official e-Catering partner. We offer a wide range of delicious food at your seat from over 550+ FSSAI-approved restaurants with the highest hygiene standards across India. Brother Byte delivers quality meals in more than 4000 trains 24x7.',
      stat: { value: '4000+', label: 'Trains Covered' },
    },
    {
      id: 2,
      icon: '🍽️',
      tag: 'Top Rated',
      title: 'Order',
      highlight: 'Top-Rated Restaurant Foods',
      titleEnd: 'in Train at Your Seat',
      content:
        'Brother Byte is your ideal choice for all food requirements in Train. We deliver a variety of fresh and tasty Veg and Non-veg foods online at your seat. We also provide pure Jain food on trains to meet specific dietary preferences, ensuring a satisfying meal for every traveler.',
      stat: { value: '550+', label: 'Restaurants' },
    },
    {
      id: 3,
      icon: '📱',
      tag: 'Mobile App',
      title: '',
      highlight: 'Brother Byte',
      titleEnd: 'Your Ultimate App for Ordering Food on Trains',
      content:
        'Brother Byte is a popular train food delivery app for ordering food during train journeys in India. It allows passengers to browse menus from various restaurants, place orders, and have food delivered directly to their seats at the designated railway station.',
      stat: { value: '24x7', label: 'Service Available' },
    },
    {
      id: 4,
      icon: '🛒',
      tag: 'How to Order',
      title: 'Ways to',
      highlight: 'Order Food on Train',
      content:
        '● Through a Mobile App: Place your order using the Brother Byte app and register with the train details.\n\n● Via the Official Website: Visit the website, browse the variety, then pay for your preferred meal online.\n\n● Phone Order: Call our customer care number, share your train details, select your meal, and opt for cash on delivery.',
      stat: { value: '3', label: 'Easy Ways' },
    },
    {
      id: 5,
      icon: '⭐',
      tag: 'Why Choose Us',
      title: 'Why is',
      highlight: 'Brother Byte',
      titleEnd: 'Better To Order Food On The Train?',
      content:
        '● IRCTC authorized e-Catering service providers for hassle-free food delivery.\n\n● Selection of reliable FSSAI-certified restaurants.\n\n● Delivering at more than 350 stations across the country.\n\n● Partnered with over 2000 restaurants pan-India.\n\n● Serving over 4000 trains including pantry and non-pantry trains.',
      stat: { value: '350+', label: 'Stations Served' },
    },
    {
      id: 6,
      icon: '🎁',
      tag: 'Special Offers',
      title: 'Special',
      highlight: 'Offers',
      titleEnd: 'on Orders at Brother Byte',
      content:
        'Experience a delightful culinary journey with Brother Byte! Enjoy an exclusive offer on your first order with us. Savor the authentic taste of our specially created dishes delivered right to your train seat. Don\'t miss out on this limited time offer — make your travel meals memorable.',
      stat: { value: '1st', label: 'Order Discount' },
    },
    {
      id: 7,
      icon: '👥',
      tag: 'Group Orders',
      title: '',
      highlight: 'Brother Byte Offers',
      titleEnd: 'Online Bulk Ordering for Groups',
      content:
        'Brother Byte offers convenient online bulk order services for train passengers. With our user-friendly platform, passengers can easily place and customize their food orders in train in advance. Whether traveling solo or in a group, our extensive menu ensures options for every palate.',
      stat: { value: 'Bulk', label: 'Orders Available' },
    },
    {
      id: 8,
      icon: '📍',
      tag: 'Pan India',
      title: 'Food Delivery in Train Across',
      highlight: '450+ Railway Stations of India',
      content:
        'Experience the convenience of Brother Byte train food delivery service. We deliver delicious meals directly to your train seat, ensuring freshness and variety. Enjoy hassle-free ordering and prompt delivery across multiple railway stations, making your journey more enjoyable.',
      stat: { value: '450+', label: 'Railway Stations' },
    },
    {
      id: 9,
      icon: '✅',
      tag: 'Benefits',
      title: 'Benefits Of',
      highlight: 'Ordering Food On Train',
      titleEnd: 'From Brother Byte',
      content:
        '● Quality Food Onboard: Savor delicious restaurant taste — every dish cooked with matchless quality and hygiene.\n\n● Economical Pricing: Enjoy your favorite meals at reasonable prices with variety for every budget.\n\n● Direct Delivery to Your Seat: Get food delivered right to your compartment — no need to leave your berth.\n\n● User-Friendly Ordering: Order easily via website, app, or WhatsApp.\n\n● Multiple Payment Options: Pay online or opt for cash-on-delivery.',
      stat: { value: '100%', label: 'Seat Delivery' },
    },
  ]

  const visibleBlocks = isExpanded ? documentBlocks : documentBlocks.slice(0, 2)

  return (
    <section className="HomeDocumentSection">
      <div className="HomeDocumentContainer common_width">

        <div className="SectionHeader">
          <span className="SectionTag">IRCTC e-Catering Partner</span>
          <h1 className="CommonHeader">
            Order Food in Trains Online{' '}
            <span>From IRCTC Trusted Partner</span>
          </h1>
          <p className="CommonPera">
            Fresh, hygienic meals delivered to your seat across 4000+ trains in India
          </p>
        </div>

        <div className="HomeDocumentBlocks">
          {visibleBlocks.map((block, index) => (
            <article key={block.id} className="DocumentBlock" style={{ '--delay': `${index * 0.08}s` }}>

              <div className="BlockLeft">
                <div className="BlockMeta">
                  <span className="BlockIcon">{block.icon}</span>
                  <span className="BlockTag">{block.tag}</span>
                </div>

                <div className="BlockStat">
                  <span className="StatValue">{block.stat.value}</span>
                  <span className="StatLabel">{block.stat.label}</span>
                </div>
              </div>

              <div className="BlockRight">
                <h2 className="BlockTitle">
                  {block.title && <>{block.title} </>}
                  <span className="BlockHighlight">{block.highlight}</span>
                  {block.titleEnd && <> {block.titleEnd}</>}
                </h2>
                <p className="CommonPera">{block.content}</p>
              </div>

            </article>
          ))}
          
        </div>

        <div className="DocumentButtonContainer">
          <button
            className="DocumentToggleButton"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
          >
            <span>{isExpanded ? 'See Less' : 'See More'}</span>
            <span className="BtnArrow">{isExpanded ? '↑' : '↓'}</span>
          </button>
        </div>

      </div>
    </section>
  )
}

export default HomeDocument