import React from 'react'
import './Home.css'
import Hero from '../../Components/Hero/Hero'
import SearchPNR from '../../Components/SearchPNR/SearchPNR'
import EnterYourPNR from '../../assets/EnterYourPNR.webp'
import ChooseYourFood from '../../assets/ChooseYourFood.webp'
import OnlinePayment from '../../assets/OnlinePayment.webp'
import GetFoodDelivery from '../../assets/GetFoodDelivery.webp'
import Discount from '../../Components/Discount/Discount'
import biryaniBrand from '../../assets/biryaniBrand.png'
import chawlas2Brand from '../../assets/chawlas2Brand.webp'
import atrangiZaikaBrand from '../../assets/atrangiZaikaBrand.webp'
import betelLeafBrand from '../../assets/betelLeafBrand.webp'
import lapinozBrand from '../../assets/lapinozBrand.webp'
import teaTimeBrand from '../../assets/teaTimeBrand.webp'
import GroupOrder from '../../Components/GroupOrder/GroupOrder'
import LatestOrder from '../../Components/LatestOrder/LatestOrder'
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs'
import Testimonials from '../../Components/Testimonials/Testimonials'
import RestaurantOwner from '../../Components/RestaurantOwner/RestaurantOwner'
import HomeDocument from '../../Components/HomeDocument/HomeDocument'
import FAQ from '../../Components/FAQ/FAQ'
import BlogCard from '../../Components/BlogCard/BlogCard'
import { BlogData } from '../../../BlogData.js'

export default function Home() {
  const brand = [
    {
      img: biryaniBrand,
    },
    {
      img: chawlas2Brand,
    },
    {
      img: atrangiZaikaBrand,
    },
    {
      img: betelLeafBrand,
    },
    {
      img: lapinozBrand,
    },
    {
      img: teaTimeBrand,
    },
  ]
  const faqData = [
    {
      id: 1,
      question: "How to book a group food order in a train online?",
      answer: (
        <>
          You can easily order group meals online on the Brother Byte website, or download the app from the Google Play Store or Apple Store. Alternatively, you can call{" "}
          <a href="tel:0714081962">071-408-1962</a> or <a href="tel:9896277713">98962-77713</a> to place bulk food orders for groups on trains.
        </>
      )
    },
    {
      id: 2,
      question: "How can we order food in train for groups in bulk?",
      answer: (
        <>
          <p>If you desire to book bulk food in train for a group, then it is very easy. For enjoying tasty, fresh, yummy, and preferable food in train, all you need to do is follow the following steps given below:</p>
          <ul>
            <li>➤ You need to visit our website or can call our customer care center at any time.</li>
            <li>➤ After this, you can visit the website, where you will find the “Group Order” icon; thus, you need to click that to check it.</li>
            <li>➤ Thirdly, enter your 10-digit PNR number.</li>
            <li>➤ Then you need to select the station and pick the restaurants or hotels as per the list displayed on the screen.</li>
            <li>➤ Now you can place your order with the best discounts from the available menu.</li>
            <li>➤ You need to pay a minimum 30 percent in advance online, and the balance you can pay at the time of delivery.</li>
          </ul>
          <p>So, this way now you can enjoy your bulk food order on train with your friends, family, or office colleagues.</p>
        </>
      )
    },
    {
      id: 3,
      question: "How can I get the best discounts and offers for group food orders in train?",
      answer: `It can be done very easily, as you need to just click on the ‘Apply Coupon’ option on the final order creation page. Here you will be able to find the entire active offers and discounts available. You can also ask your agents to help you generate bulk food meals for your train journey. In most of the orders, pricing is reduced by 20 to 30 percent for all the customers. Thus, you can enjoy mouthwatering food items with your group while enjoying your journey.`
    },
    {
      id: 4,
      question: "Which is the most common type of bulk ordering food in train is received?",
      answer: (
        <>
          <p>We are glad to denote that we accept bulk food orders for train deliveries online for following given types of groups. It includes:</p>
          <ul>
            <li>➤ Corporate office teams</li>
            <li>➤ School and college students</li>
            <li>➤ Large family gatherings and friend groups</li>
            <li>➤ Senior citizens groups</li>
            <li>➤ Groups on government duty</li>
            <li>➤ Pilgrims on devotional religious visits</li>
            <li>➤ National armed and security forces</li>
            <li>➤ Wedding or special events</li>
            <li>➤ Birthdays and Anniversary Group Gathering</li>
            <li>➤ Other social group travel</li>
          </ul>
        </>
      )
    },
    {
      id: 5,
      question: "Which religious, pious and famous tourist places are covered for ordering bulk food meals in trains?",
      answer: (
        <>
          <p>Below is the given list of the religious destinations we cover serving group food in trains.</p>
          <p>They are Mata Vaishno Devi ji Katra, Haridwar, Pryagraj, Varanasi, Goldern Temple, Ayodhya, Matura, Shirdi, Ajmer Sharif, Amritsat, Rameshwaram, Nashik, Patna, Puri, Ujjain, Samalkot, Kanchipuram, Chitrakoot, Dwarika, Ranakpur, Bodh Gaya, Pushkar, Rishikesh, Vijaywada, Tirupati Balaji, Nathdwara etc.</p>
        </>
      )
    },
    {
      id: 6,
      question: "How can we order for cooperated office teams on train?",
      answer: (
        <>
          <p>It is quite easy, as teams traveling for official visits can contact us through our website and fill out the group order form. This will help you to send a query mentioning your food preferences.</p>
          <p>Also, you can easily download the website of RajBhogkhana at the Google Play Store app and order your group food orders.</p>
        </>
      )
    },
    {
      id: 7,
      question: "How can a tour operator, trip organizer, or the tour agent organize to order bulk food on the train?",
      answer: (
        <>
          <p>This is to bring to your notice that we at Brother Byte offer special attention to all the travel agents and tour operators for booking bulk food orders in trains. For this, they can contact our sales team or even easily drop an inquiry over email.</p>
          <p>Adding more to it, we have a special reward program for all the travel agents and operators in the industry. Our well-trained team will widely assist you in the best ways to book a group meal order, and that too at the best price.</p>
        </>
      )
    },
    {
      id: 8,
      question: "How can we book food meals for religious visits for large groups?",
      answer: (
        <>
          <p>On the auspicious occasion of festivals, it is witnessed that a large number of groups travel to pilgrimages or other religious places for darshans. We will feel glad and thankful to serve these pilgrim groups with bulk food popularly known as Satvik Bhojan and fulfill their appetite.</p>
          <p>The Satvik Bhojan that we will serve you will be from FSSAI-approved restaurants from across India. All you need to do is just fill out the group order query form on your website or call us at our registered number.</p>
        </>
      )
    },
    {
      id: 9,
      question: "How to order group food traveling to attend a marriage ceremony?",
      answer: "For this, you can just call us at our registered number, or you can visit our website to fill out the query form. Our team will reply to you and will facilitate you with the best offers and discounts in no time."
    },
    {
      id: 10,
      question: "How can we order Satvik Thali of Jain food meals on train?",
      answer: "When you visit the website to place the order, you need to look for the category of ‘THALIS’ in the menu of the restaurant. You will be availed of the options of Jain Thali or Satvik Thali with the rates. You need to click on them and add quantity as per your requirements."
    },
    {
      id: 12,
      question: "How much advance do we need to pay while placing an order for group meals on the train?",
      answer: "It is just 30 percent of the total cost you need to pay in advance while you place your group food order. Apart from the rest, you can pay on the delivery of the food by cash or online payment can be easily done."
    },
    {
      id: 13,
      question: "What is the contact number for placing bulk food orders for a group on the train?",
      answer: (
        <>
          <p>You can call Brother Byte at <a href="tel:0714081962">071-408-1962</a> or <a href="tel:9896277713">98962-77713</a> to order group food in bulk on the train. Our team will assist you with your order and ensure a delightful dining experience for your journey!</p>
        </>
      )
    },
  ];
  return (
    <>
        <Hero />
        <div className="common_width">
          <SearchPNR />
          <div className="HTO_mainWrpr">
            <h1 className="CommonHeader">How To Order Food in <span>Train With Borther Byte</span></h1>
            <div className="HTO_wrpr">
              <div className="card_HTO">
                <img src={EnterYourPNR} />
                <h2>Enter PNR or Train Number</h2>
              </div>
              <div className="card_HTO">
                <img src={ChooseYourFood} />
                <h2>Choose Your Favorite Food</h2>
              </div>
              <div className="card_HTO">
                <img src={OnlinePayment} />
                <h2>Payment Online or Cash</h2>
              </div>
              <div className="card_HTO">
                <img src={GetFoodDelivery} />
                <h2>Receive Food at Your Seat</h2>
              </div>
            </div>
          </div>
          <Discount />
          {/* <div className="Brand_wrpr">
            <h1 className="CommonHeader">Order Food From <span>The Best Brands</span></h1>
            <div className="Brand_SubWrpr">
              {brand.map((item, index) => (
                <div key={index} className="card_Brand">
                  <img src={item.img} alt="" />
                </div>
              ))}
            </div>
          </div> */}
          <GroupOrder />
          </div>
          <WhyChooseUs />
          <div className="common_width">
          <LatestOrder />
          <RestaurantOwner/>
        </div>
          <Testimonials />
          <div className="common_width">
            <HomeDocument />
          </div>
          <FAQ faqData={faqData}/>
          <div className="common_width">
          <div className="blogWrprHomeMain">
            <h1 className="CommonHeader">Brother Byte <span>Blogs</span></h1>
            <div className="blogWrprHome">
              {BlogData.slice(0, 4).map((blog) => (
                <BlogCard 
                  key={blog.id}
                  image={blog.image}
                  title={blog.title}
                  content={blog.content}
                  link={`/blog/${blog.slug}`}
                />
              ))}
            </div>
          </div>
          </div>
    </>
  )
}
