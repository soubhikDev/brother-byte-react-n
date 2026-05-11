import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './StationMenu.css';

const IconArrowLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6" />
  </svg>
);

export default function StationMenu() {
  const { restaurant } = useParams();
  const navigate = useNavigate();

  return (
    <div className="StationMenu_wrpr">
      <div className="StationMenu_card">
        <div className="StationMenu_header">
          <h1>Station Menu</h1>
          <p className="StationMenu_subtitle">
            {restaurant
              ? `You selected ${restaurant}. Browse the station menu below.`
              : 'Select a restaurant card to continue to the station menu.'}
          </p>
        </div>

        <div className="StationMenu_content">
          <div className="StationMenu_info">
            <span>Station menu content will appear here.</span>
          </div>
        </div>

        <button className="StationMenu_back" onClick={() => navigate(-1)}>
          <IconArrowLeft />
          Back to results
        </button>
      </div>
    </div>
  );
}
