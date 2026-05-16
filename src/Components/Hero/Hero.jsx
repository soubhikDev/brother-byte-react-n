import React from 'react'
import './Hero.css' 
import { useNavigate } from "react-router-dom";


export default function Hero() {
    const navigate = useNavigate();
    
  return (
    <>
        <div className="HeroMain">
            <div className="HeroSub">
                <div className="hero_text">
                    <div className="hero_craving">Craving?</div>
                    <div className="hero_main_text">
                        <h1>FOOD</h1>
                        <h2>DELIVERY</h2>
                    </div>
                    <div className="hero_subtitle">
                        TO YOUR SEAT AT THE <span className="highlight">NEXT TRAIN STATION</span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
