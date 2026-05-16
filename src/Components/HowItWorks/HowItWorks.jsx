import "./HowItWorks.css";
import train from "../../assets/train.png";
import menu from "../../assets/menu.png";
import creditcard from "../../assets/credit-card.png";
import travel from "../../assets/travel.png";

const steps = [
  {
    id: "01",
    color: "#22b14c",
    bg: "linear-gradient(135deg, #22b14c, #1a9c3e)",
    icon: (
        <img src={train} alt="PNR Icon" width="36" height="36" />
    ),
    title: "Enter PNR or\nTrain Number",
    desc: "Enter your PNR or Train number to begin your order.",
  },
  {
    id: "02",
    color: "#f5a623",
    bg: "linear-gradient(135deg, #f5a623, #e08c00)",
    icon: (
      <img src={menu} alt="Choose Food Icon" width="36" height="36" />
    ),
    title: "Choose Your\nFavorite Food",
    desc: "Explore menu and choose your favorite meal.",
  },
  {
    id: "03",
    color: "#e20613",
    bg: "linear-gradient(135deg, #e2434d, #e20613)",
    icon: (
      <img src={creditcard} alt="Payment Icon" width="36" height="36" />
    ),
    title: "Payment\nOnline or Cash",
    desc: "Pay securely online or choose cash on delivery.",
  },
  {
    id: "04",
    color: "#7b68ee",
    bg: "linear-gradient(135deg, #9b89f5, #7b68ee)",
    icon: (
      <img src={travel} alt="Delivery Icon" width="36" height="36" />
    ),
    title: "Receive Food\nat Your Seat",
    desc: "Relax and enjoy your food delivered fresh at your seat.",
  },
];

const features = [
  {
    color: "#22b14c",
    bg: "#e8f8ee",
    icon: (
      <svg viewBox="0 0 24 24" fill="#22b14c" width="20" height="20">
        <path d="M17 8C8 10 5.9 16.17 3.82 19.93 4.27 20 4.73 20 5 20c1.69 0 6.5-4 6.5-4 .83 2 2.83 4 6.5 4C19 20 21 16 21 14c0-5-4-6-4-6zM12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>
      </svg>
    ),
    label: "Fresh & Hygienic",
  },
  {
    color: "#f5a623",
    bg: "#fff8ee",
    icon: (
      <svg viewBox="0 0 24 24" fill="#f5a623" width="20" height="20">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ),
    label: "Live Order Tracking",
  },
  {
    color: "#e20613",
    bg: "#fff0f1",
    icon: (
      <svg viewBox="0 0 24 24" fill="#e20613" width="20" height="20">
        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
      </svg>
    ),
    label: "24/7 Customer Support",
  },
  {
    color: "#7b68ee",
    bg: "#f3f0ff",
    icon: (
      <svg viewBox="0 0 24 24" fill="#7b68ee" width="20" height="20">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
      </svg>
    ),
    label: "100% Satisfaction",
  },
];

export default function HowItWorks() {
  return (
    <section className="hiw">
      <div className="hiw__inner">
        <h1 className="CommonHeader">How To Order Food in Train With <span>Brother Byte</span></h1>
        {/* Steps */}
        <div className="hiw__steps">
          {steps.map((step, i) => (
            <div className="hiw__step-wrap" key={step.id}>
              {/* Icon circle */}
              <div className="hiw__icon-wrap">
                <div className="hiw__icon-circle" style={{ background: step.bg }}>
                  {step.icon}
                </div>
                {/* Dotted connector line */}
                {i < steps.length - 1 && (
                  <div className="hiw__connector" />
                )}
              </div>

              {/* Card */}
              <div className="hiw__card">
                <span className="hiw__step-num" style={{ color: step.color }}>
                  {step.id}
                </span>
                <h3 className="hiw__step-title">
                  {step.title.split("\n").map((line, j) => (
                    <span key={j}>{line}{j === 0 && <br />}</span>
                  ))}
                </h3>
                <p className="hiw__step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature bar */}
        <div className="hiw__features">
          {features.map((f, i) => (
            <>
              <div className="hiw__feature" key={f.label}>
                <div className="hiw__feature-icon" style={{ background: f.bg }}>
                  {f.icon}
                </div>
                <span className="hiw__feature-label">{f.label}</span>
              </div>
              {i < features.length - 1 && (
                <div className="hiw__feat-divider" key={`d-${i}`} />
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
