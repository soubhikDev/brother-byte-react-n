import React from 'react'
import './Discount.css'
import DiscountImg from '../../assets/DiscountImg.png'
import CouponCard from '../../Components/CouponCard/CouponCard'
import { Button, TextField } from '@mui/material'

export default function Discount() {

  return (
    <>
        <div className="DiscountMain">
            <div className="textDiscountSection">
                <h1 className="CommonHeader">Enjoy Our Special Offers On <span>Train Food Delivery</span></h1>
                {/* <h2>Please Enter Your E-Mail</h2>
                <div className="inputSection">
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                    <Button variant="contained">Submit</Button>
                </div> */}
                <div className="coponesWrpr">
                    {/* {Coupon.map((item, index) => (
                        <div key={index} className="couponsMapWrpr">
                            <h1>OFF</h1>
                            <div className="couponsSubWrpr">
                                <h2>Flat Rs - {item.discount}</h2>
                                <h3>Code - {item.name}</h3>
                                <h4>on order above {item.orderAmount}</h4>
                            </div>
                        </div>
                    ))} */}
                    <CouponCard
                        offerLabel="OFFER VOUCHER"
                        discountValue="5%"
                        discountUnit="OFF"
                        description="Get Flat 5% Discount of Every Prepaid Order."
                        voucherCode="PREPAID5"
                        minOrder="₹1"
                    />
                    <CouponCard
                        offerLabel="OFFER VOUCHER"
                        discountValue="5%"
                        discountUnit="OFF"
                        description="Get Flat 5% Discount of Every Prepaid Order."
                        voucherCode="PREPAID5"
                        minOrder="₹1"
                    />
                    <CouponCard
                        offerLabel="OFFER VOUCHER"
                        discountValue="5%"
                        discountUnit="OFF"
                        description="Get Flat 5% Discount of Every Prepaid Order."
                        voucherCode="PREPAID5"
                        minOrder="₹1"
                    />
                </div>
            </div>
        </div>
    </>
  )
}
