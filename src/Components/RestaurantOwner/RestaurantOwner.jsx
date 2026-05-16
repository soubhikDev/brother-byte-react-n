import React from 'react'
import './RestaurantOwner.css'
import RestaurantOwnerImg from '../../assets/RestaurantOwnerImg.jpg'
import { useNavigate } from 'react-router-dom';

export default function RestaurantOwner() {
  const navigate = useNavigate();
  return (
    <div className="RestaurantOwnerMain">
      <div className="RestaurantOwner_TextSection">
        <div className="RestaurantOwner_Content">
          <h1 className='CommonHeader'>Are You A <span>Restaurant Owner?</span></h1>
          <p className="CommonPera TL">
            Expand your business online, boost your brand and sales. <br />
Register your restaurant to become an authorized IRCTC e-Catering Vendor and deliver your delicious food to train passengers across the country. <br />
Register now to start delivering food on trains today.
          </p>
          <button className="CommonBTN RestaurantOwner_BTN" onClick={() => navigate("/partner")}>Sign Up as Partner</button>
        </div>
      </div>
      <div className="RestaurantOwner_ImageSection">
        <img src={RestaurantOwnerImg} alt="Group Order" onClick={() => navigate("/partner")}/>
      </div>
    </div>
  )
}
