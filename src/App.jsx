import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext.jsx";
import "./App.css";

import heroImage from "./assets/hero.png";
import contactProductImage from "./assets/contact-product.png";
import navbarLogo from "./assets/riyansh-navbar-logo.png";

function App() {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = ["home", "about", "herbs", "benefits", "contact"];

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 140;
      let currentSection = "home";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const features = [
    {
      icon: "🌿",
      title: t.about.features.herbs.title,
      text: t.about.features.herbs.text,
    },
    {
      icon: "🍃",
      title: t.about.features.natural.title,
      text: t.about.features.natural.text,
    },
    {
      icon: "◇",
      title: t.about.features.sugar.title,
      text: t.about.features.sugar.text,
    },
    {
      icon: "🍶",
      title: t.about.features.pack.title,
      text: t.about.features.pack.text,
    },
  ];

  const healthBenefits = [
    {
      icon: "🛡️",
      title: t.about.health.immunity.title,
      text: t.about.health.immunity.text,
    },
    {
      icon: "🌿",
      title: t.about.health.digestion.title,
      text: t.about.health.digestion.text,
    },
    {
      icon: "🍃",
      title: t.about.health.liver.title,
      text: t.about.health.liver.text,
    },
    {
      icon: "◇",
      title: t.about.health.kidney.title,
      text: t.about.health.kidney.text,
    },
    {
      icon: "💧",
      title: t.about.health.sugar.title,
      text: t.about.health.sugar.text,
    },
    {
      icon: "❤️",
      title: t.about.health.pressure.title,
      text: t.about.health.pressure.text,
    },
    {
      icon: "💚",
      title: t.about.health.heart.title,
      text: t.about.health.heart.text,
    },
    {
      icon: "🫁",
      title: t.about.health.respiratory.title,
      text: t.about.health.respiratory.text,
    },
    {
      icon: "✨",
      title: t.about.health.skin.title,
      text: t.about.health.skin.text,
    },
    {
      icon: "⚖️",
      title: t.about.health.weight.title,
      text: t.about.health.weight.text,
    },
  ];

  // IMPORTANT: herbs now come from translations.js
  const herbs = t.herbs.items;

  const owners = [
    {
      name: "Suchita Dhasal",
      phone: "8626090450",
      tel: "tel:+918626090450",
      whatsapp: "https://wa.me/918626090450",
    },
    {
      name: "Sandeep Dhasal",
      phone: "8530718057",
      tel: "tel:+918530718057",
      whatsapp: "https://wa.me/918530718057",
    },
  ];

  return (
    <div className={`website language-${language.toLowerCase()}`}>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-container">

          <a
            href="#home"
            className="brand"
            onClick={() => setMenuOpen(false)}
            aria-label="Riyansh Multitrade - Home"
          >
            <img
              src={navbarLogo}
              alt="Riyansh Multitrade Pvt. Ltd."
              className="navbar-logo"
            />
          </a>

          <nav className={`desktop-nav ${menuOpen ? "mobile-open" : ""}`}>

            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className={activeSection === "home" ? "active-nav-link" : ""}
            >
              {t.nav.home}
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className={activeSection === "about" ? "active-nav-link" : ""}
            >
              {t.nav.about}
            </a>

            <a
              href="#herbs"
              onClick={() => setMenuOpen(false)}
              className={activeSection === "herbs" ? "active-nav-link" : ""}
            >
              {t.nav.herbs}
            </a>

            <a
              href="#benefits"
              onClick={() => setMenuOpen(false)}
              className={activeSection === "benefits" ? "active-nav-link" : ""}
            >
              {t.nav.discover}
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className={activeSection === "contact" ? "active-nav-link" : ""}
            >
              {t.nav.contact}
            </a>

          </nav>

          <div className="nav-right">

            <div className="language-switcher">

              <button
                type="button"
                className={language === "EN" ? "active" : ""}
                onClick={() => setLanguage("EN")}
              >
                EN
              </button>

              <button
                type="button"
                className={language === "HI" ? "active" : ""}
                onClick={() => setLanguage("HI")}
              >
                हिंदी
              </button>

              <button
                type="button"
                className={language === "MR" ? "active" : ""}
                onClick={() => setLanguage("MR")}
              >
                मराठी
              </button>

            </div>

            <button
              type="button"
              className="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? "×" : "☰"}
            </button>

          </div>

        </div>
      </header>

      <main>

        {/* HERO */}
        <section
          id="home"
          className="hero-section"
          style={{ "--hero-image": `url(${heroImage})` }}
        >

          <div className="hero-overlay"></div>

          <div className="hero-content">

            <div className="hero-tag">
              <span>🌿</span>
              <span>{t.hero.tag}</span>
            </div>

            <h1>
              {t.hero.titleLine1}
              <span>{t.hero.titleLine2}</span>
            </h1>

            <p className="hero-description">
              {t.hero.description}
            </p>

            <div className="hero-features">

              <div className="feature-card">
                <div className="feature-icon">🌿</div>

                <div>
                  <strong>{t.hero.feature1Top}</strong>
                  <small>{t.hero.feature1Bottom}</small>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">✓</div>

                <div>
                  <strong>{t.hero.feature2Top}</strong>
                  <small>{t.hero.feature2Bottom}</small>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🍃</div>

                <div>
                  <strong>{t.hero.feature3Top}</strong>
                  <small>{t.hero.feature3Bottom}</small>
                </div>
              </div>

            </div>

            <div className="hero-buttons">

              <a
                className="whatsapp-button"
                href="https://wa.me/918626090450"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 {t.hero.whatsapp}
                <span>→</span>
              </a>

              <a
                className="call-button"
                href="tel:+918626090450"
              >
                📞 {t.hero.call}
              </a>

            </div>

          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="about-section">

          <div className="about-inner">

            <div className="about-header">

              <div className="about-label-row">
                <span className="section-label">
                  {t.about.label}
                </span>

                <span className="gold-line"></span>
              </div>

              <h2>{t.about.title}</h2>

              <h3>{t.about.subtitle}</h3>

              <p className="about-description">
                {t.about.description}
              </p>

            </div>

            <div className="about-features">

              {features.map((feature, index) => (
                <div
                  className="about-feature-card"
                  key={index}
                >
                  <div className="about-feature-icon">
                    {feature.icon}
                  </div>

                  <div className="about-feature-content">
                    <h4>{feature.title}</h4>
                    <p>{feature.text}</p>
                  </div>
                </div>
              ))}

            </div>

            <div className="health-section">

              <div className="health-heading">

                <div className="health-heading-icon">
                  🌿
                </div>

                <div className="health-heading-content">

                  <h3>
                    {t.about.healthTitle}
                  </h3>

                  <p>
                    {t.about.healthDescription}
                  </p>

                </div>

              </div>

              <div className="health-grid">

                {healthBenefits.map((benefit, index) => (
                  <div
                    className="health-card"
                    key={index}
                  >
                    <div className="health-icon">
                      {benefit.icon}
                    </div>

                    <h4>{benefit.title}</h4>

                    <p>{benefit.text}</p>
                  </div>
                ))}

              </div>

            </div>

            <div className="about-note">

              <div className="note-icon">
                🌿
              </div>

              <div>

                <h4>
                  {t.about.importantTitle}
                </h4>

                <p>
                  {t.about.importantText}
                </p>

              </div>

            </div>

            <div className="directions-section">

              <div className="directions-icon">

                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >

                  <path
                    d="M20 17H44"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  <path
                    d="M24 17V48C24 51.3 26.7 54 30 54H34C37.3 54 40 51.3 40 48V17"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  <path
                    d="M27 11H37C38.7 11 40 12.3 40 14V17H24V14C24 12.3 25.3 11 27 11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  <path
                    d="M29 27H35"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  <path
                    d="M29 33H35"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                </svg>

              </div>

              <div className="directions-content">

                <span className="directions-label">
                  {t.about.howToUseLabel}
                </span>

                <h3>
                  {t.about.howToUseLabel}
                </h3>

                <div className="directions-gold-line"></div>

                <div className="directions-flow">

                  <div className="use-step">
                    <span className="use-number">01</span>

                    <p>
                      {t.about.howToUse.step1}
                    </p>
                  </div>

                  <span className="use-arrow">→</span>

                  <div className="use-step">
                    <span className="use-number">02</span>

                    <p>
                      {t.about.howToUse.step2}
                    </p>
                  </div>

                  <span className="use-arrow">→</span>

                  <div className="use-step">
                    <span className="use-number">03</span>

                    <p>
                      {t.about.howToUse.step3}
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* 42 HERBS */}
        <section
          id="herbs"
          className="section herbs-section"
        >

          <span className="section-label">
            {t.herbs.label}
          </span>

          <h2>{t.herbs.title}</h2>

          <p className="section-description">
            {t.herbs.description}
          </p>

          <div className="herb-list">

            {herbs.map((herb, index) => (
              <span key={index}>
                {herb}
              </span>
            ))}

          </div>

        </section>

        {/* DISCOVER / BENEFITS */}
        <section
          id="benefits"
          className="benefits-section"
        >

          <div className="benefits-why">

            <div className="benefits-why-content">

              <span className="benefits-label">
                {t.discover.whyLabel}
              </span>

              <h2>
                {t.discover.whyTitleLine1}
                <br />
                {t.discover.whyTitleLine2}
              </h2>

              <p>
                {t.discover.whyText}
              </p>

            </div>

            <div className="benefits-why-features">

              <div className="benefits-feature">
                <div className="benefits-feature-icon">🌿</div>

                <h3>
                  {t.discover.features.herbs.titleLine1}
                  <br />
                  {t.discover.features.herbs.titleLine2}
                </h3>

                <p>
                  {t.discover.features.herbs.text}
                </p>
              </div>

              <div className="benefits-feature">
                <div className="benefits-feature-icon">🍃</div>

                <h3>
                  {t.discover.features.natural.titleLine1}
                  <br />
                  {t.discover.features.natural.titleLine2}
                </h3>

                <p>
                  {t.discover.features.natural.text}
                </p>
              </div>

              <div className="benefits-feature">
                <div className="benefits-feature-icon">◇</div>

                <h3>
                  {t.discover.features.sugar.titleLine1}
                  <br />
                  {t.discover.features.sugar.titleLine2}
                </h3>

                <p>
                  {t.discover.features.sugar.text}
                </p>
              </div>

              <div className="benefits-feature">
                <div className="benefits-feature-icon">▢</div>

                <h3>
                  {t.discover.features.pack.titleLine1}
                  <br />
                  {t.discover.features.pack.titleLine2}
                </h3>

                <p>
                  {t.discover.features.pack.text}
                </p>
              </div>

            </div>

          </div>

          <div className="benefits-different">

            <div className="benefits-different-intro">

              <span className="benefits-label">
                {t.discover.differentLabel}
              </span>

              <h2>{t.discover.differentTitle}</h2>

              <p>
                {t.discover.differentText}
              </p>

            </div>

            <div className="benefits-different-points">

              <div className="benefits-different-point">

                <div className="benefits-different-icon">
                  🌿
                </div>

                <h3>
                  {t.discover.points.blend.title}
                </h3>

                <p>
                  {t.discover.points.blend.text}
                </p>

              </div>

              <div className="benefits-different-point">

                <div className="benefits-different-icon">
                  🍃
                </div>

                <h3>
                  {t.discover.points.everyday.titleLine1}
                  <br />
                  {t.discover.points.everyday.titleLine2}
                </h3>

                <p>
                  {t.discover.points.everyday.text}
                </p>

              </div>

              <div className="benefits-different-point">

                <div className="benefits-different-icon">
                  ♨
                </div>

                <h3>
                  {t.discover.points.traditional.titleLine1}
                  <br />
                  {t.discover.points.traditional.titleLine2}
                </h3>

                <p>
                  {t.discover.points.traditional.text}
                </p>

              </div>

            </div>

          </div>

          <div className="benefits-natural">

            <div className="benefits-natural-content">

              <span className="benefits-label">
                {t.discover.naturalLabel}
              </span>

              <h2>
                {t.discover.naturalTitleLine1}
                <br />
                {t.discover.naturalTitleLine2}
              </h2>

              <p>
                {t.discover.naturalText}
              </p>

            </div>

            <div className="benefits-natural-features">

              <div className="benefits-natural-feature">
                <div className="benefits-natural-icon">🌿</div>

                <strong>
                  {t.discover.features.herbs.titleLine1}
                  <br />
                  {t.discover.features.herbs.titleLine2}
                </strong>
              </div>

              <div className="benefits-natural-feature">
                <div className="benefits-natural-icon">🍃</div>

                <strong>
                  {t.discover.features.natural.titleLine1}
                  <br />
                  {t.discover.features.natural.titleLine2}
                </strong>
              </div>

              <div className="benefits-natural-feature">
                <div className="benefits-natural-icon">◇</div>

                <strong>
                  {t.discover.features.sugar.titleLine1}
                  <br />
                  {t.discover.features.sugar.titleLine2}
                </strong>
              </div>

              <div className="benefits-natural-feature">
                <div className="benefits-natural-icon">▢</div>

                <strong>
                  {t.discover.features.pack.titleLine1}
                  <br />
                  {t.discover.features.pack.titleLine2}
                </strong>
              </div>

            </div>

          </div>

          <div className="benefits-note">

            <div className="benefits-note-icon">
              🌿
            </div>

            <div>

              <h3>
                {t.discover.importantTitle}
              </h3>

              <p>
                {t.discover.importantText}
              </p>

            </div>

          </div>

          {/* CUSTOMER TESTIMONIALS */}

          <section className="customer-testimonials">

            <div className="customer-testimonials-header">

              <span className="benefits-label">
                {t.discover.testimonialsLabel}
              </span>

              <h2>
                {t.discover.testimonialsTitleLine1}
                <br />
                {t.discover.testimonialsTitleLine2}
              </h2>

              <p>
                {t.discover.testimonialsText}
              </p>

            </div>

            <div className="testimonial-grid">

              {[
                {
                  name: "Vijay Dighe",
                  location: "Pune, Gahunje",
                  text: t.discover.testimonials.vijay,
                },
                {
                  name: "Poonam Patil",
                  location: "Pune, Kondhwa",
                  text: t.discover.testimonials.poonam,
                },
                {
                  name: "Satish Chandane",
                  location: "Malegaon",
                  text: t.discover.testimonials.satish,
                },
                {
                  name: "Vishwas Jadhav",
                  location: "Pune, Gahunje",
                  text: t.discover.testimonials.vishwas,
                },
                {
                  name: "Anita Kulkarni",
                  location: "Pune, Kondhwa",
                  text: t.discover.testimonials.anita,
                },
                {
                  name: "Rahul Deshmukh",
                  location: "Malegaon",
                  text: t.discover.testimonials.rahul,
                },
              ].map((review, index) => (

                <div className="testimonial-card" key={index}>

                  <div className="testimonial-top">
                    <span className="testimonial-stars">
                      ★★★★★
                    </span>

                    <span className="testimonial-quote">
                      “
                    </span>
                  </div>

                  <p className="testimonial-text">
                    {review.text}
                  </p>

                  <div className="testimonial-author">

                    <div className="testimonial-avatar">
                      {review.name.charAt(0)}
                    </div>

                    <div>
                      <h3>{review.name}</h3>
                      <span>{review.location}</span>
                    </div>

                  </div>

                </div>

              ))}

            </div>

          </section>

          {/* CTA */}

          <section className="benefits-cta">

            <div className="benefits-cta-content">

              <span className="benefits-label">
                {t.discover.ctaLabel}
              </span>

              <h2>
                {t.discover.ctaTitleLine1}
                <br />
                {t.discover.ctaTitleLine2}
              </h2>

              <p>
                {t.discover.ctaText}
              </p>

            </div>

          </section>

        </section>

        {/* CONTACT */}

        <section id="contact" className="contact-section">

          <div className="contact-page">

            <div className="contact-left">

              <div className="contact-heading">

                <div className="contact-label-row">

                  <span className="contact-section-label">
                    {t.contact.label}
                  </span>

                  <span className="contact-gold-line"></span>

                </div>

                <h2>
                  {t.contact.titleLine1}
                  <br />
                  {t.contact.titleLine2}
                </h2>

                <p>
                  {t.contact.description}
                </p>

              </div>

              <div className="contact-owner-grid">

                {owners.map((owner, index) => (

                  <div
                    className="contact-owner-card"
                    key={index}
                  >

                    <div className="owner-top">

                      <div className="owner-avatar">

                        <svg
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >

                          <circle
                            cx="24"
                            cy="24"
                            r="24"
                            fill="#E4F0D0"
                          />

                          <circle
                            cx="24"
                            cy="19"
                            r="7"
                            fill="#166B4F"
                          />

                          <path
                            d="M13 35C13 29.4772 17.9249 25 24 25C30.0751 25 35 29.4772 35 35V37H13V35Z"
                            fill="#166B4F"
                          />

                        </svg>

                      </div>

                      <div className="owner-info">
                        <h3>{owner.name}</h3>
                        <p>{t.contact.ownerRole}</p>
                      </div>

                    </div>

                    <div className="owner-phone">

                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >

                        <path
                          d="M6.6 10.8C8.1 13.8 10.2 15.9 13.2 17.4L15.6 15C15.9 14.7 16.4 14.6 16.8 14.8C18 15.3 19.3 15.6 20.6 15.7C21.1 15.7 21.5 16.1 21.5 16.6V20.4C21.5 20.9 21.1 21.3 20.6 21.3C10.7 21.3 2.7 13.3 2.7 3.4C2.7 2.9 3.1 2.5 3.6 2.5H7.4C7.9 2.5 8.3 2.9 8.3 3.4C8.4 4.7 8.7 6 9.2 7.2C9.4 7.6 9.3 8.1 9 8.4L6.6 10.8Z"
                          fill="currentColor"
                        />

                      </svg>

                      <span>{owner.phone}</span>

                    </div>

                    <div className="owner-actions">

                      <a
                        href={owner.tel}
                        className="owner-call-button"
                      >

                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >

                          <path
                            d="M6.6 10.8C8.1 13.8 10.2 15.9 13.2 17.4L15.6 15C15.9 14.7 16.4 14.6 16.8 14.8C18 15.3 19.3 15.6 20.6 15.7C21.1 15.7 21.5 16.1 21.5 16.6V20.4C21.5 20.9 21.1 21.3 20.6 21.3C10.7 21.3 2.7 13.3 2.7 3.4C2.7 2.9 3.1 2.5 3.6 2.5H7.4C7.9 2.5 8.3 2.9 8.3 3.4C8.4 4.7 8.7 6 9.2 7.2C9.4 7.6 9.3 8.1 9 8.4L6.6 10.8Z"
                            fill="currentColor"
                          />

                        </svg>

                        <span>{t.contact.call}</span>

                      </a>

                      <a
                        href={owner.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="owner-whatsapp-button"
                      >

                        <svg
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >

                          <path
                            d="M16 3C8.82 3 3 8.82 3 16C3 18.3 3.6 20.5 4.7 22.4L3.1 28.9L9.8 27.3C11.7 28.4 13.8 29 16 29C23.18 29 29 23.18 29 16C29 8.82 23.18 3 16 3Z"
                            stroke="currentColor"
                            strokeWidth="2"
                          />

                          <path
                            d="M11.1 9.7C11.5 9.3 12 9.4 12.3 9.9L13.7 12.1C14 12.6 13.9 13 13.5 13.4L12.4 14.4C13.1 15.8 14.2 16.9 15.6 17.6L16.6 16.5C17 16.1 17.4 16 17.9 16.3L20.1 17.7C20.6 18 20.7 18.5 20.3 18.9L19.4 19.8C18.7 20.5 17.7 20.8 16.7 20.5C12.7 19.2 9.8 16.3 8.5 12.3C8.2 11.3 8.5 10.3 9.2 9.6L11.1 9.7Z"
                            fill="currentColor"
                          />

                        </svg>

                        <span>{t.contact.whatsapp}</span>

                      </a>

                    </div>

                  </div>

                ))}

              </div>

            </div>

            <div
              className="contact-connect-panel contact-connect-panel-compact"
              style={{
                "--contact-product-image":
                  `url(${contactProductImage})`,
              }}
            >

              <div className="connect-image-overlay"></div>

              <div className="connect-content">

                <div className="connect-label-row">

                  <span>{t.contact.question}</span>

                  <span className="connect-gold-line"></span>

                </div>

                <h2>
                  {t.contact.connectLine1}
                  <br />
                  {t.contact.connectLine2}
                </h2>

                <p>
                  {t.contact.connectText}
                </p>

                <div className="connect-buttons">

                  <a
                    href="https://wa.me/918626090450"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="connect-whatsapp"
                  >

                    <svg
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >

                      <path
                        d="M16 3C8.82 3 3 8.82 3 16C3 18.3 3.6 20.5 4.7 22.4L3.1 28.9L9.8 27.3C11.7 28.4 13.8 29 16 29C23.18 29 29 23.18 29 16C29 8.82 23.18 3 16 3Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />

                      <path
                        d="M11.1 9.7C11.5 9.3 12 9.4 12.3 9.9L13.7 12.1C14 12.6 13.9 13 13.5 13.4L12.4 14.4C13.1 15.8 14.2 16.9 15.6 17.6L16.6 16.5C17 16.1 17.4 16 17.9 16.3L20.1 17.7C20.6 18 20.7 18.5 20.3 18.9L19.4 19.8C18.7 20.5 17.7 20.8 16.7 20.5C12.7 19.2 9.8 16.3 8.5 12.3C8.2 11.3 8.5 10.3 9.2 9.6L11.1 9.7Z"
                        fill="currentColor"
                      />

                    </svg>

                    <span>{t.contact.whatsappShort}</span>
                    <span className="button-arrow">→</span>

                  </a>

                  <a
                    href="tel:+918626090450"
                    className="connect-call"
                  >

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >

                      <path
                        d="M6.6 10.8C8.1 13.8 10.2 15.9 13.2 17.4L15.6 15C15.9 14.7 16.4 14.6 16.8 14.8C18 15.3 19.3 15.6 20.6 15.7C21.1 15.7 21.5 16.1 21.5 16.6V20.4C21.5 20.9 21.1 21.3 20.6 21.3C10.7 21.3 2.7 13.3 2.7 3.4C2.7 2.9 3.1 2.5 3.6 2.5H7.4C7.9 2.5 8.3 2.9 8.3 3.4C8.4 4.7 8.7 6 9.2 7.2C9.4 7.6 9.3 8.1 9 8.4L6.6 10.8Z"
                        fill="currentColor"
                      />

                    </svg>

                    <span>{t.contact.callShort}</span>
                    <span className="button-arrow">→</span>

                  </a>

                </div>

              </div>

              <div className="connect-product-visual">

                <div className="product-glow"></div>

                <img
                  src={contactProductImage}
                  alt="Riyansh Amrit Juice"
                  className="connect-product-image"
                />

              </div>

            </div>

          </div>

          <div className="contact-bottom-strip contact-bottom-combined">

            <div className="contact-bottom-block contact-address-block">

              <div className="contact-bottom-icon">

                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >

                  <circle
                    cx="24"
                    cy="24"
                    r="24"
                    fill="#E4F0D0"
                  />

                  <path
                    d="M24 12C18.477 12 14 16.477 14 22C14 29.5 24 37 24 37C24 37 34 29.5 34 22C34 16.477 29.523 12 24 12Z"
                    fill="#166B4F"
                  />

                  <circle
                    cx="24"
                    cy="22"
                    r="3.5"
                    fill="#E4F0D0"
                  />

                </svg>

              </div>

              <div className="contact-bottom-divider"></div>

              <div className="contact-bottom-text">

                <h3>{t.contact.addressTitle}</h3>

                <p>
                  {t.contact.addressLine1}<br />
                  {t.contact.addressLine2}<br />
                  {t.contact.addressLine3}
                </p>

              </div>

            </div>

            <div className="contact-combined-separator"></div>

            <div className="contact-bottom-block contact-brand-block">

              <div className="contact-bottom-icon">

                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >

                  <circle
                    cx="24"
                    cy="24"
                    r="24"
                    fill="#E4F0D0"
                  />

                  <path
                    d="M24 34V18M24 24C19 20 16 17 15 13M24 27C29 23 32 20 33 16M24 30C20 28 17 26 15 23M24 22C27 20 29 18 30 15"
                    stroke="#166B4F"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />

                </svg>

              </div>

              <div className="contact-bottom-divider"></div>

              <div className="contact-bottom-text">

                <h3>{t.contact.brandTitle}</h3>

                <p>{t.contact.brandText}</p>

              </div>

            </div>

          </div>

        </section>

      </main>

      <footer className="footer">
        {t.footer}
      </footer>

    </div>
  );
}

export default App;