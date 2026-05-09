import React from 'react'
import './Offer.css'
import ContactHero from '../../assets/ContactHero.png'
import GroupOrderImg from '../../assets/GroupOrderImg.jpg'
import PageHero from '../../Components/PageHeros/PageHero'
import OfferCard from '../../Components/OfferCard/OfferCard'

export default function Offer() {
  return (
    <>
        <PageHero PageHeroData={{title: 'Offer', img: ContactHero}} />
        <div className="common_width">
            <div className="offerMain_wrpr">
                <h1 className="CommonHeader">Gift <span>Vouchers</span></h1>
                <p className="CommonPera">Spread the joy with our gift voucher-the perfact present for any occasion</p>
                <div className="offerSub_wrpr">
                    <OfferCard 
                    image={GroupOrderImg}
                    discountAmount="₹30"
                    minOrder="₹299"
                    couponCode="SUM30"
                    onOrderNow={() => console.log('Order clicked')}
                    />
                    <OfferCard 
                    image={GroupOrderImg}
                    discountAmount="₹30"
                    minOrder="₹299"
                    couponCode="SUM30"
                    onOrderNow={() => console.log('Order clicked')}
                    />
                    <OfferCard 
                    image={GroupOrderImg}
                    discountAmount="₹30"
                    minOrder="₹299"
                    couponCode="SUM30"
                    onOrderNow={() => console.log('Order clicked')}
                    />
                    <OfferCard 
                    image={GroupOrderImg}
                    discountAmount="₹30"
                    minOrder="₹299"
                    couponCode="SUM30"
                    onOrderNow={() => console.log('Order clicked')}
                    />
                </div>
            </div>
        </div>
    </>
  )
}
