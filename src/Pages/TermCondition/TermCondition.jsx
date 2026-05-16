import React from 'react'
import "./TermCondition.css";
import PageHero from '../../Components/PageHeros/PageHero';
import ContactHero from '../../assets/ContactHero.png'

export default function TermCondition() {
  return (
    <>
        <PageHero PageHeroData={{title: 'Terms & Conditions', img: ContactHero}} />
        <div className="common_width">
            <div className="tcMain_wrpr">
                <h1 className="CommonHeader">Terms & <span>Conditions</span></h1>
                <p className="CommonPera">Thanks for choosing to use our service ('Services'). The Services are provided by Brother Byte which is a brand of Brother Byte registered under the Indian Companies act.</p>
                <p className="CommonPera">We believe in honest and transparent business systems, and our intention is to bring the most ethical work practices. Therefore, it is our request to every user and visitor of our website i.e. www.brotherbyte.com to read all the below mentioned terms and conditions carefully.</p>
                <p className="CommonPera">We are Brother Byte, a brand of Brother Byte registered under the Indian Companies Act, unless otherwise stated. ’Agreement’ is a reference to these Terms and Conditions, the Privacy Policy, any order form and payment instructions provided to you.</p>
                <p className="CommonPera">'Website’ is a reference to our Website www.brotherbyte.com on which we offer our Product or Services.</p>
                <p className="CommonPera">‘Service’ or ‘Services’ is a reference to any service which we may supply and which you may request via our Website.</p>
                <p className="CommonPera">‘Restaurant’, ‘Outlet’ or ‘Outlets’ are restaurant and restaurant owners who prepare and/or deliver the Product or Services ordered on this web site.</p>
                <p className="CommonPera">‘Privacy Policy’ means the policy displayed on our Website which details of how we collect and store your personal data.</p>
                <p className="CommonPera">‘Product’ is a reference to any goods which we may offer for sale from our Website from time to time.</p>
                <p className="CommonPera">‘Food Delivery’ is a reference to perishable goods and to any form of delivery service, which both are provided by Restaurants chosen for delivery.</p>
                <p className="CommonPera">Brother Byte calculation of order amount if 50 paise and above so count 1.00 rs and if 49 paise and below so count 0.00 rs.</p>
        </div>
        </div>
    </>
  )
}
