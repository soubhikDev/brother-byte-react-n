import React from 'react'
import './GroupOrder.css'
import GroupOrderImg from '../../assets/GroupOrderImg.jpg'

export default function GroupOrder() {
  return (
    <div className="GroupOrderMain">
      <div className="GroupOrder_TextSection">
        <div className="GroupOrder_Content">
          <h1>Order Bulk Food for <span>Group in Train</span> with Brother Byte</h1>
          <p className="GroupOrder_Description">
            Looking for bulk food order in train for your group? Brother Byte makes it easy! Order delicious food for your train journey and enjoy a memorable experience with us.
          </p>
          <button className="CommonBTN GroupOrder_BTN">Group Order</button>
        </div>
      </div>
      <div className="GroupOrder_ImageSection">
        <img src={GroupOrderImg} alt="Group Order" />
      </div>
    </div>
  )
}
