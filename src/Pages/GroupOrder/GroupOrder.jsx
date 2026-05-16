import React, { useState, useEffect } from "react";
import "./GroupOrder.css";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { LocationsData } from "../../../LocationsData";
import { NavLink, useNavigate } from "react-router-dom";
import FAQ from '../../Components/FAQ/FAQ'


export default function GroupOrder() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    Number_of_guests: "",
    message: "",
  });

  const [phoneDisplay, setPhoneDisplay] = useState("");
  const [phoneError, setPhoneError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formatPhone = (input) => {
    let digits = input.replace(/\D/g, "").slice(0, 10);

    if (digits.length <= 3) return digits;
    if (digits.length <= 6)
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;

    return `(${digits.slice(0, 3)}) ${digits.slice(
      3,
      6
    )}-${digits.slice(6)}`;
  };

  const handleChangeNumber = (e) => {
    let input = e.target.value.replace(/\D/g, "").slice(0, 10);

    const formatted = formatPhone(input);

    let isError = false;

    if (input.length !== 10) isError = true;
    if (input.length > 0 && input[0] < 6) isError = true;

    setPhoneError(isError);
    setPhoneDisplay(formatted);

    setFormData({
      ...formData,
      phone: input,
    });
  };

  const handleLocationChange = (e) => {
    setFormData({
      ...formData,
      location: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.Number_of_guests ||
      !formData.location
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (phoneError) {
      alert("Invalid phone number");
      return;
    }

    const finalData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      numberOfGuest: formData.Number_of_guests,
      message: formData.message,
      location: formData.location,
    };


    // reset
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      Number_of_guests: "",
      message: "",
    });
    setPhoneDisplay("");
  };

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
          <p>Also, you can easily download the website of Brother Byte at the Google Play Store app and order your group food orders.</p>
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
    <div className="groupOrder">
      <div className="groupOrderSub">
        <div className="bulk-container">
          <h2>Bulk Order Request</h2>

          <form className="bulk-form" onSubmit={handleSubmit}>
            <TextField
              label="Your Name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />

            <TextField
              label="Email Address"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <TextField
              label="Number"
              name="phone"
              required
              value={phoneDisplay}
              error={phoneError}
              onChange={handleChangeNumber}
              helperText={phoneError ? "Enter valid 10-digit number" : ""}
            />

            <TextField
              label="Number of Guests"
              type="number"
              name="Number_of_guests"
              required
              value={formData.Number_of_guests}
              onChange={handleChange}
            />

            <FormControl fullWidth>
              <InputLabel>Select Location</InputLabel>
              <Select
                label='Select Location'
                value={formData.location}
                onChange={handleLocationChange}
              >
                {LocationsData.map((item, index) => (
                  <MenuItem key={index} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              name="message"
              label="Additional Details"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />

            <Button variant="contained" type="submit">
              Submit Request
            </Button>
          </form>
        </div>
        <div className="bulkFoodTEXT">
          <h1>Group Food Order in Train Request From</h1>
          <p>Are you traveling with family, friends, or colleagues by train and looking for fresh, hygienic, and tasty meals in bulk for your group? Order group meals with Brother Byte! Simply fill out the Group Food Order Form to get discounts on bulk food orders in the train. We’ll get back to you with special offers based on your requirements.</p></div>
      </div>
      <div className="common_width">
        <div className="GO_textBlocks">
          <p className="CommonPera">Traveling in a group is always exciting, thrilling, and full of fun-filled memories. Moreover, if added with the desired food services at your seat, then nothing can beat your excitement and enthusiasm all over the journey in the train.</p>
          <p className="CommonPera">So, here comes one of the most promising, experienced, and trusted online caterers, Brother Byte, to serve you with all your food requirements on the train.</p>
        </div>
        <div className="GO_textBlocks">
          <h1 className="CommonHeader">Why Choose Brother byte for <span>Bulk Food Order in Train?</span></h1>
          <p className="CommonPera">Since many years we have been serving our customers, and this has built strong trust among our customers. We have been even authorized by IRTC to serve online group food services. Thus, Brother Byte is among the most famous and well-experienced brands in the market to serve bulk meals on the train.</p>
          <p className="CommonPera">We offer a wide range of food preferences for travelers, as we have a wide network of restaurants and hotels. Brother Byte offers the travelers to order pure vegetarian, non-vegetarian, seasonal food, traditional food, festive food, Satvik food, special food of any state, dietary food, and other snacks too.</p>
          <p className="CommonPera">We have experience serving large groups of <NavLink to='/'>food on trains</NavLink> for 1200-1500+ people at one time. This makes us stand out in the market of online bulk food delivery on trains.</p>
        </div>
        <div className="GO_textBlocks">
          <h1 className="CommonHeader">Our Expanded Services to <span>Order Bulk Food Online</span></h1>
          <p className="CommonPera">➤ Brother Byte is widely known to cater group food in trains for different types of gatherings. It includes serving group meals for schools, colleges, large family groups, pilgrims and large multinational companies’ cooperative groups.</p>
          <p className="CommonPera">➤ We have also gained popularity by serving bulk food orders in trains for groups on government duty and national armed and security forces.</p>
          <p className="CommonPera">➤ We were glad to serve Satvik Bhojan for groups traveling to different pilgrimages. Brother Byte marks the importance of Satvik food that is preferred by the group on devotional religious visits, and thus, we serve them as per their order.</p>
          <p className="CommonPera">➤ We are specially recalled for catering bulk meals in trains for the people traveling for grand occasions like weddings and other social events.</p>
          <p className="CommonPera">➤ Overall, we have been complimented for serving complete <NavLink to='/'> Jain food meals</NavLink> on trains for our Jain travelers.</p>
        </div>
        <div className="GO_textBlocks">
          <h1 className="CommonHeader">Book Bulk <span>Food Orders Online</span></h1>
          <p className="CommonPera">The customers must download the Brother Byte app to order their food on the train. You will be availed of various offers and discounts for your order. Order bulk meals in train for a group by following these few steps:</p>
          <ul>
            <li>➤ Enter your PNR Number</li>
            <li>➤ Detail of Total Number of Passengers</li>
            <li>➤ Select the Food Preference from the Menu</li>
            <li>➤ Choose the Restaurant and Delivery Station</li>
          </ul>
        </div>
        <div className="GO_textBlocks">
          <h1 className="CommonHeader">Our Contact Details to <span>Book Bulk Meals Online</span></h1>
          <p className="CommonPera">You can call us on  <a href="tel:0714081962">071-408-1962</a> or <a href="tel:9896277713">98962-77713</a>, or you can log in to our website and fill out the query form given. <br />
Brother Byte is always here to deliver you the best, tasty, fresh, and mouthwatering group food on train within no time. The customers are requested to note that during the festive time and vacation period, just plan a day in advance to get food preferences for each member of your group.</p>
        </div>
      </div>
      <FAQ faqData={faqData}/>
    </div>
  );
}