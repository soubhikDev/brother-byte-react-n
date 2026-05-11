import React from 'react'
import './Partner.css'
import PageHero from '../../Components/PageHeros/PageHero'
import WhyChooseUs from '../../Components/WhyChooseUs2/WhyChooseUs'
import PartnerEnquiry from '../../Components/PartnerEnquiry/PartnerEnquiry'
import FAQComponent from '../../Components/FAQ/FAQ'

const steps = [
  {
    title: 'Register with RBK',
    description: 'Join the RBK family by registering your restaurant with us in just a few easy steps.',
    icon: '📍',
  },
  {
    title: 'IRCTC Approval',
    description: 'Once you join Brother Byte, RBK handles the IRCTC approval process on your behalf.',
    icon: '🏛️',
    featured: true,
  },
  {
    title: 'Platform Permission',
    description: 'After approval, RBK applies for your platform pass permit with 6 months validity.',
    icon: '🪪',
  },
  {
    title: 'Start Receiving Orders',
    description: 'Get the opportunity to start your food delivery journey directly in trains.',
    icon: '📱',
  },
]

const faqData = [
    {
      id: 1,
      question: "Bring Your Restaurant To Train",
      answer: 'Apply here to register your restaurant for food delivery in trains of online orders. Now become food vendor for e-Catering services by following the guidelines shared by IRCTC. Please fill up this form and get an opportunity to expend your business by serving to Railway passengers.'
    },
    {
      id: 2,
      question: "Opportunity By Become With Brother Byte?",
      answer: 'Brother Byte enables you to get make new customers.'
    },
    {
      id: 3,
      question: "Food in Train Vendor Tie-Up",
      answer: (
        <>
            <p>Grow your business and boost your brand image and reputation. Take your restaurant business online and serve train passengers. Food in train vendor tie-up process takes few days to complete. This process does not involve any tender based model.</p>
            <p>Your complete application and documents are checked and sent for approval by our vendor team within a day. Just make sure that you fill and send all correct details and photographs. Our sales team remains in touch with you throughout the process. You will get regular updates of your IRCTC e-Catering vendor enrolment status from us.</p>
            <p>Post approval you will get delivery passes for your team. Delivery cards helps customers identify genuine delivery boys. You can use them for getting into stations for food delivery in trains as well.</p>
        </>
      )
    },
]

export default function Partner() {
  return (
    <>
      <PageHero PageHeroData={{ title: 'Partner' }} />

      <section className="PartnerHowItWorks">
        <div className="common_width PartnerHowItWorks_inner">

          <div className="PartnerHowItWorks_header">
            <div className="tag">Partnership Process</div>
            <h2>
              How It <span>Works?</span>
            </h2>
            <p className="subtitle">
              Simple 4-step process to get your restaurant onboard and start serving passengers across India.
            </p>
          </div>

          <div className="PartnerSteps">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`PartnerStepCard${step.featured ? ' featured' : ''}`}
              >
                <div className="PartnerStepNumber">
                  <div className="num">0{index + 1}</div>
                  <div className="arrow">→</div>
                </div>

                <div className="PartnerStepIcon">
                  <span>{step.icon}</span>
                </div>

                <div className="PartnerStepText">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      <WhyChooseUs/>
      <PartnerEnquiry />
      <FAQComponent faqData={faqData}/>
    </>
  )
}