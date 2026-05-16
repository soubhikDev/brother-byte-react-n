import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import './FAQ.css';

const FAQComponent = ({ faqData }) => {
  const [activeId, setActiveId] = useState(null);
  const answersRef = useRef({});
  const itemsRef = useRef({});
  const containerRef = useRef(null);



  // ✨ GSAP Animation on Mount
  useEffect(() => {
    const tl = gsap.timeline();



    // FAQ Items staggered animation
    Object.keys(itemsRef.current).forEach((key, index) => {
      tl.from(itemsRef.current[key], {
        opacity: 1,
        y: 30,
        duration: 0.6,
        ease: 'power2.out'
      }, 0.4 + index * 0.1);
    });
  }, []);

  // 🎬 Toggle FAQ with GSAP Animation
const toggleFAQ = (id) => {
  const isSame = activeId === id;

  // Close current
  if (isSame) {
    const el = answersRef.current[id];

    gsap.to(el, {
      height: 0,
      opacity: 1,
      paddingBottom: 0,
      duration: 0.35,
      ease: "power2.inOut"
    });

    gsap.to(`.faq-icon-${id}`, {
      rotation: 0,
      scale: 1,
      duration: 0.3
    });

    setActiveId(null);
    return;
  }

  // Close previous
  if (activeId) {
    const prev = answersRef.current[activeId];

    gsap.to(prev, {
      height: 0,
      opacity: 0,
      paddingBottom: 0,
      duration: 0.3
    });

    gsap.to(`.faq-icon-${activeId}`, {
      rotation: 0,
      scale: 1,
      duration: 0.3
    });
  }

  // Open new
  setActiveId(id);

  setTimeout(() => {
    const el = answersRef.current[id];

    const height = el.scrollHeight;

    gsap.fromTo(
      el,
      {
        height: 0,
        opacity: 0,
        paddingBottom: 0
      },
      {
        height: height,
        opacity: 1,
        paddingBottom: 24,
        duration: 0.45,
        ease: "power2.out"
      }
    );

    gsap.to(`.faq-icon-${id}`, {
      rotation: 45,
      scale: 1.1,
      duration: 0.3,
      ease: "back.out(1.7)"
    });
  }, 0);
};

  // 🔄 Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      const faqIds = faqData.map(item => item.id);
      const currentIndex = faqIds.indexOf(activeId);

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = currentIndex === -1 ? 0 : Math.min(currentIndex + 1, faqIds.length - 1);
        const nextId = faqIds[nextIndex];
        setActiveId(activeId === nextId ? null : nextId);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex = currentIndex === -1 ? faqIds.length - 1 : Math.max(currentIndex - 1, 0);
        const prevId = faqIds[prevIndex];
        setActiveId(activeId === prevId ? null : prevId);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeId, faqData]);

  return (
    <div className="faq-wrapper" ref={containerRef}>
      <div className="common_width">
        {/* Header */}
        <div className="faq-header">
          {/* <div className="faq-label">Our FAQs</div> */}
          <div className="CommonEyebrow">
            How It Works
          </div>
          <h1 className="CommonHeader">FREQUENTLY ASKED <span>QUESTIONS</span></h1>
          <p className="CommonPera">FAQs on Group Food Orders in Train</p>
        </div>

        {/* FAQ List */}
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className={`faq-item ${activeId === faq.id ? 'active' : ''}`}
              ref={(el) => {
                if (el) itemsRef.current[faq.id] = el;
              }}
              onClick={() => toggleFAQ(faq.id)}
              style={{ '--item-index': index }}
            >
              {/* Question */}
              <div className="faq-question">
                <span className="faq-question-text">{faq.question}</span>
                <div className={`faq-icon`}></div>
              </div>

              {/* Answer */}
              <div
                className="faq-answer"
                ref={(el) => {
                  if (el) answersRef.current[faq.id] = el;
                }}
              >
                {faq.answer && <div className="faq-answer-text">{faq.answer}</div>}
                {faq.links && (
                  <div className="faq-links">
                    {faq.links.map((link, idx) => (
                      <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.text}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="faq-decoration faq-decoration-1"></div>
      <div className="faq-decoration faq-decoration-2"></div>
    </div>
  );
};

export default FAQComponent;