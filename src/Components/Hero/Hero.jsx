import React from 'react'
import './Hero.css' 
import BannerHero from '../../assets/BannerHero.png'
import { useNavigate } from "react-router-dom";


export default function Hero() {
    const navigate = useNavigate();
    
  return (
    <>
        <div className="HeroMain">
            <div className="common_width HeroSub">
                <div className="hero_text">
                    <h4>Delicious</h4>
                    <h1>Food Delivery</h1>
                    <h2>To your seat at the</h2>
                    <h2>next bus stop</h2>
                    <div className="HomeBannerBTN">
                        <button className="HomeBannerBTN1" onClick={() => navigate("/menu")}>Order Now</button>
                        <button className="HomeBannerBTN2" onClick={() => navigate("/contact")}>Call Now</button>
                    </div>
                </div>
                <img src={BannerHero} alt="Banner" />
            </div>
        </div>
    </>
  )
}
