let counterInterval = null;

function formatMeals(num) {
  return (num / 10000000).toFixed(6).slice(0, 8) + ' Cr+';
}

export const HomePage = {
  render() {
    return `
    <div class="home-page animate-fade">

      <!-- 1. Hero Section -->
      <section class="hero-section">
        <picture class="hero-bg">
          <source srcset="https://cdn.feedingindia.org/fi-web/assets/MTc4NTMyOTU0ODg5MzMyMDI1NA.webp" media="(max-width: 768px)" />
          <img src="https://cdn.feedingindia.org/fi-web/assets/MTc4NTMyNTExNTI5MTE4NDkyMQ.webp" alt="Together with Assam flood relief operations" />
        </picture>
        <div class="hero-overlay">
          <div class="contain hero-content">
            <h1 class="hero-title animate-slide-up">Together with Assam</h1>
            <p class="hero-desc animate-slide-up" style="animation-delay:0.1s">
              Severe flooding has affected lakhs of people across Assam. As one of the first responders on the ground, Feeding India is delivering essential relief meals.
            </p>
            <div class="hero-actions animate-slide-up" style="animation-delay:0.2s">
              <a href="#/about-us" class="btn btn-secondary btn-outline-white">Know more</a>
              <a href="#/donate" class="btn btn-primary">Donate now</a>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. Mission Statement & Stats -->
      <section class="stats-section section-padding">
        <div class="contain">
          <div class="stats-header">
            <h2 class="stats-title-desc">
              Feeding India is powered by millions of Indians with one bold vision:<br />
              <strong class="text-highlight">make India malnutrition free</strong>
            </h2>
          </div>

          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-icon-wrapper">
                <svg viewBox="0 0 48 48" fill="none" width="40" height="40" stroke="currentColor" stroke-width="1.5"><path d="M45.9 28.2c-.2.1-.4.2-.6.2s-.4 0-.6 0c-.2-.1-.4-.1-.6-.2-.1-.1-.3-.2-.4-.4-.9-1.2-2.1-2.2-3.4-2.9C39 24.3 37.5 24 36 24c-.3 0-.6-.1-.8-.3-.3-.2-.5-.4-.6-.7-.1-.2-.1-.4-.1-.6 0-.2.1-.4.2-.6.1-.3.3-.5.6-.7.2-.2.5-.3.8-.3.8 0 1.7-.2 2.4-.7s1.3-.9 1.7-1.6c.4-.8.5-1.6.4-2.5-.1-.8-.4-1.6-.9-2.3-.5-.7-1.2-1.2-2-1.5s-1.7-.3-2.5-.2c-.8.2-1.6.6-2.2 1.2-.6.6-1 1.3-1.2 2.1 0 .2-.1.4-.2.6-.1.2-.3.3-.4.4s-.4.1-.6.1h-.2c-.2 0-.4-.1-.6-.2-.2-.1-.3-.3-.4-.4-.1-.2-.2-.4-.2-.6s0-.4.1-.6c.3-1.1.8-2.2 1.6-3s1.7-1.6 2.8-2c1.1-.4 2.3-.6 3.5-.5s2.3.4 3.3 1c1 1 1.8 1.8 2.5 2.8.6 1 .9 2.1 1.1 3.3.1 1.2 0 2.4-.4 3.5-.4 1.1-1.1 2.1-1.9 2.9 2 1 3.8 2.4 5.1 4.2.1.2.2.4.3.6s.1.4.1.6c0 .2-.1.4-.2.6s-.2.3-.4.4zm-10.1 11.5c.1.2.2.4.2.6s0 .4-.1.6c-.1.2-.2.4-.3.6-.1.2-.3.3-.5.4s-.4.1-.6.1c-.2 0-.4-.1-.6-.2s-.3-.3-.4-.5c-1-1.6-2.3-2.9-3.9-3.8-1.6-.9-3.4-1.4-5.3-1.4s-3.7.5-5.3 1.4-2.9 2.2-3.9 3.8c-.1.2-.2.4-.4.5s-.3.2-.6.2c-.2 0-.4-.1-.6-.1c-.2-.1-.3-.3-.5-.4s-.2-.4-.3-.6c0-.2 0-.4.1-.6.1-.2.2-.4.3-.6 1.5-2.5 3.7-4.5 6.3-5.6-1.5-1.1-2.6-2.7-3.1-4.5s0-3.7.6-5.5c.6-1.8 1.8-3.3 3.3-4.4 1.5-1.1 3.3-1.7 5.2-1.7s3.7.6 5.2 1.7c1.5 1.1 2.7 2.6 3.3 4.4.6 1.8.8 3.7.3 5.5s-1.6 3.4-3.1 4.5c2.6 1.1 4.8 3.1 6.3 5.6zM24 33c1.2 0 2.3-.4 3.3-1.1 1-1 1.8-2 2.2-3.1.5-1.1.6-2.3.4-3.5-.2-1.2-.8-2.3-1.6-3.1-.8-.8-1.9-1.4-3.1-1.6s-2.4-.1-3.5.4c-1.1.5-2 1.2-2.7 2.2-.7 1-1.1 2.2-1.1 3.4 0 1.6.6 3.1 1.8 4.2C20.9 32.4 22.4 33 24 33zm-10.5-10.5c0-.4-.2-.8-.4-1.1s-.6-.4-1-.4c-.8 0-1.7-.2-2.4-.7s-1.3-.9-1.7-1.6c-.4-.8-.5-1.6-.4-2.5.1-.8.4-1.6.9-2.3.5-.7 1.2-1.2 2-1.5s1.7-.3 2.5-.2c.8.2 1.6.6 2.2 1.2s1 1.3 1.2 2.1c.1.4.4.7.7.9.3.2.7.3 1.1.2s.7-.3.9-.6c.2-.3.3-.7.2-1.1C19 13.5 18.4 12.4 17.7 11.6s-1.8-1.6-2.9-2c-1.1-.4-2.3-.6-3.5-.5S9 9.5 8 10.1C7 10.7 6.2 11.5 5.5 12.5S4.5 14.7 4.4 15.9c-.1 1.2.1 2.4.5 3.5.4 1.1 1.1 2.1 1.9 2.9-2.1.9-3.8 2.3-5.1 4.1-.2.3-.3.7-.3 1.1s.2.8.5 1.1c.3.3.7.4 1.1.4s.8-.2 1.1-.5C5.1 26.7 6.3 25.7 7.6 25c1.4-.7 2.9-1 4.4-1 .4 0 .8-.2 1.1-.4s.4-.7.4-1.1z"/></svg>
              </div>
              <h3 class="stat-number">1.4 Lakh+</h3>
              <p class="stat-label">children served daily</p>
            </div>

            <div class="stat-card highlight">
              <div class="stat-icon-wrapper red">
                <svg viewBox="0 0 48 48" fill="none" width="40" height="40" stroke="currentColor" stroke-width="1.5"><path d="M42 21H6c-.4 0-.8.2-1.1.5s-.4.7-.4 1.1c.1 3.6 1.1 7.1 2.9 10.2s4.5 5.5 7.6 7.2v.7c0 .8.3 1.6.9 2.2s1.4.9 2.2.9h12c.8 0 1.6-.3 2.2-.9s.9-1.4.9-2.2v-.7c3.1-1.7 5.7-4.1 7.6-7.2S43.5 26.1 43.5 22.5c0-.4-.2-.8-.5-1.1s-.7-.4-1-.4zM30.9 37.5c-.3.1-.5.3-.7.5s-.2.5-.2.8V40.5H18v-1.6c0-.3-.1-.6-.2-.8s-.4-.4-.7-.5C14.5 36.3 12.2 34.4 10.5 32c-1.7-2.4-2.7-5.1-3-8h32.9c-.3 2.9-1.3 5.7-3 8s-3.9 4.3-6.5 5.5zM15.3 10.3c1-1.2 1.3-2.1 1.2-2.5-.1-.3-.5-.4-.5-.4-.3-.1-.6-.3-.8-.6S15 6.1 15 5.8c.1-.4.2-.7.5-.9s.6-.4 1-.4c.2 0 .3 0 .5.1.2.1 1.9.7 2.4 2.5.5 1.5-.1 3.2-1.7 5.2-1 1.2-1.3 2.1-1.2 2.5.1.3.5.4.5.4.3.1.6.3.8.6s.2.7.2 1c-.1.4-.3.7-.5.9s-.6.4-1 .4c-.2 0-.3 0-.5-.1-.2-.1-1.9-.7-2.4-2.5-.5-1.5.1-3.2 1.7-5.2zm7.5 0c1-1.2 1.3-2.1 1.2-2.5-.1-.3-.5-.4-.5-.4-.3-.1-.6-.3-.8-.6s-.2-.6-.2-.9c.1-.4.2-.7.5-.9s.6-.4 1-.4c.2 0 .3 0 .5.1.2.1 1.9.7 2.4 2.5.5 1.5-.1 3.2-1.7 5.2-1 1.2-1.3 2.1-1.2 2.5.1.3.5.4.5.4.3.1.6.3.8.6s.2.7.2 1c-.1.4-.3.7-.5.9s-.6.4-1 .4c-.2 0-.3 0-.5-.1-.2-.1-1.9-.7-2.4-2.5-.5-1.5.1-3.2 1.7-5.2zm7.5 0c1-1.2 1.3-2.1 1.2-2.5-.1-.3-.5-.4-.5-.4-.3-.1-.6-.3-.8-.6s-.2-.6-.2-.9c.1-.4.2-.7.5-.9s.6-.4 1-.4c.2 0 .3 0 .5.1.2.1 1.9.7 2.4 2.5.5 1.5-.1 3.2-1.7 5.2-1 1.2-1.3 2.1-1.2 2.5.1.3.5.4.5.4.3.1.6.3.8.6s.2.7.2 1c-.1.4-.3.7-.5.9s-.6.4-1 .4c-.2 0-.3 0-.5-.1-.2-.1-1.9-.7-2.4-2.5-.5-1.5.1-3.2 1.7-5.2z"/></svg>
              </div>
              <h3 class="stat-number live-counter" id="live-meal-counter">${formatMeals(280000000)}</h3>
              <p class="stat-label">meals served till date</p>
            </div>

            <div class="stat-card">
              <div class="stat-icon-wrapper">
                <svg viewBox="0 0 23 18" fill="none" width="40" height="40" stroke="currentColor" stroke-width="1.5"><path d="M21.6 10.2c-.3-.2-.6-.3-.9-.4s-.6 0-.9 0c1.8-1.8 2.7-3.6 2.7-5.3C22.5 2 20.5 0 18 0c-.7 0-1.3.1-1.9.4s-1.1.7-1.5 1.2c-.4-.5-.9-.9-1.5-1.2s-1.2-.4-1.9-.4C8.7 0 6.8 2 6.8 4.5c0 1 .3 2 1 3.1-.5.1-1 .4-1.4.8L4.2 10.5H1.5c-.4 0-.8.2-1.1.5s-.4.7-.4 1.1v3.8c0 .4.2.8.5 1.1s.7.4 1 .4h9.8c.1 0 .2 0 .3-.1l6-1.5c0 0 .1 0 .1-.1l3.6-1.6c.4-.2.7-.4.9-.8s.4-.7.4-1.1c0-.4-.1-.8-.3-1.1s-.4-.7-.7-.9zM11.2 1.5c.6 0 1.2.2 1.6.5s.9.7 1.1 1.3c.1.1.2.3.3.4s.3.1.4.1.3 0 .4-.1.2-.2.3-.4c.2-.5.6-1 1.1-1.3s1.1-.5 1.6-.5c1.6 0 3 1.4 3 3 0 1.8-1.5 3.9-4.3 6l-1 1.2c.1-.4.1-.8 0-1.2s-.3-.8-.5-1.1-.5-.6-.9-.8c-.4-.2-.8-.3-1.2-.2H9.4C8.6 6.4 8.3 5.4 8.3 4.5c0-1.6 1.3-3 3-3zM1.5 12h2.3V15.8H1.5V12zm19.1.8l-3.6 1.5-5.9 1.5H5.3v-4.2l2.1-2.1c.1-.1.3-.2.5-.3s.4-.1.6-.1h4.7c.3 0 .6.1.8.3s.3.5.3.8-.1.6-.3.8-.5.3-.8.3H10.5c-.2 0-.4.1-.5.3s-.2.4-.2.5c0 .2.1.4.2.5s.4.3.5.3h3c.1 0 .2 0 .2-.1L20 11.3s.2 0 .3.1c.2.1.3.3.4.5s.1.4.1.6c-.1.2-.2.4-.3.5h.1z"/></svg>
              </div>
              <h3 class="stat-number">1,600+</h3>
              <p class="stat-label">partner centers</p>
            </div>

            <div class="stat-card">
              <div class="stat-icon-wrapper">
                <svg viewBox="0 0 45 36" fill="none" width="40" height="40" stroke="currentColor" stroke-width="1.5"><path d="M43.5 33H42V10.5c0-.4-.2-.8-.5-1.1s-.7-.4-1-.4H28.5c-.4 0-.8.2-1.1.5s-.4.7-.4 1.1V18H18V1.5c0-.4-.2-.8-.5-1.1s-.7-.4-1-.4H4.5C4.1 0 3.7.2 3.4.5s-.4.7-.4 1.1V33H1.5c-.4 0-.8.2-1.1.5s-.4.7-.4 1.1c0 .4.2.8.5 1.1s.7.4 1 .4H43.5c.4 0 .8-.2 1.1-.5c.3-.3.4-.7.4-1.1c0-.4-.2-.8-.5-1.1s-.7-.4-1-.4zM30 12h9V33h-9V12zm-3 9v12H18V21h9zM6 3h9v30H6V3zm6 4.5V10.5c0 .4-.2.8-.5 1.1s-.7.4-1 .4-.8-.2-1.1-.5-.4-.7-.4-1V7.5c0-.4.2-.8.5-1.1s.7-.4 1-.4.8.2 1.1.5.4.7.4 1.1zm0 9V19.5c0 .4-.2.8-.5 1.1s-.7.4-1 .4-.8-.2-1.1-.5-.4-.7-.4-1v-3c0-.4.2-.8.5-1.1s.7-.4 1-.4.8.2 1.1.5.4.7.4 1.1zm0 9V28.5c0 .4-.2.8-.5 1.1s-.7.4-1 .4-.8-.2-1.1-.5-.4-.7-.4-1v-3c0-.4.2-.8.5-1.1s.7-.4 1-.4.8.2 1.1.5.4.7.4 1.1zm9 3V25.5c0-.4.2-.8.5-1.1s.7-.4 1-.4.8.2 1.1.5.4.7.4 1.1v3c0 .4-.2.8-.5 1.1s-.7.4-1 .4-.8-.2-1.1-.5-.4-.7-.4-1zm12 0V25.5c0-.4.2-.8.5-1.1s.7-.4 1-.4.8.2 1.1.5.4.7.4 1.1v3c0 .4-.2.8-.5 1.1s-.7.4-1 .4-.8-.2-1.1-.5-.4-.7-.4-1z"/></svg>
              </div>
              <h3 class="stat-number">160+</h3>
              <p class="stat-label">cities & villages</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. Our Programs Sections -->
      <section class="programs-section section-padding bg-light">
        <div class="contain">
          <div class="section-header">
            <span class="section-label">Our Initiatives</span>
            <h2 class="section-title">Combating Malnutrition</h2>
            <p class="section-subtitle">
              We operate targeted hunger relief programs to ensure support reaches children at key developmental stages.
            </p>
          </div>

          <div class="programs-grid">
            <div class="program-card">
              <div class="program-image-wrapper">
                <img src="https://cdn.feedingindia.org/fi-web/assets/MTc3NzkyODY4NDI2MzY1MDU4Mw.webp" alt="Daily Feeding Program at a school center" class="program-img" />
              </div>
              <div class="program-content">
                <h3 class="program-name">Daily Feeding Program</h3>
                <p class="program-description">
                  Classroom hunger is a major barrier to education. We serve free, hot, and nutritious meals daily to children in schools, special needs centers, and vocational schools, helping them learn and thrive.
                </p>
                <a href="#/daily-feeding-program" class="btn btn-secondary">Learn more</a>
              </div>
            </div>

            <div class="program-card">
              <div class="program-image-wrapper">
                <img src="https://cdn.feedingindia.org/fi-web/assets/MTc3OTM1MzM4MzgxMTIxMjYzMg.webp" alt="Anganwadi Program center" class="program-img" />
              </div>
              <div class="program-content">
                <h3 class="program-name">The Anganwadi Program</h3>
                <p class="program-description">
                  To tackle malnutrition in early childhood, we strengthen the government's daycare network. We upgrade sanitation, create learning spaces, provide diverse meals, and train Anganwadi caregivers.
                </p>
                <a href="#/the-anganwadi-program" class="btn btn-secondary">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. CSR / Partner Call-Out -->
      <section class="csr-banner-section section-padding">
        <div class="contain csr-container">
          <div class="csr-text">
            <h2 class="csr-title">Partner with us to create a lasting impact</h2>
            <p class="csr-description">
              We collaborate with corporations, NGOs, local communities, and government authorities to scale solutions. Leverage our operational network, auditing transparency, and tracking tools for CSR projects.
            </p>
            <div class="csr-actions">
              <a href="#/partner-with-us" class="btn btn-primary">Become a Partner</a>
              <a href="#/about-us" class="btn btn-secondary">Our Audits & Transparency</a>
            </div>
          </div>
          <div class="csr-graphic">
            <div class="csr-badge">
              <span class="badge-text">Zomato</span>
              <span class="badge-sub">Giveback initiative</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. Call To Action (Bottom Banner) -->
      <section class="bottom-cta-section section-padding text-center">
        <div class="contain">
          <span class="caveat-writing">Make a difference today</span>
          <h2 class="cta-title">Help us feed a child in need</h2>
          <p class="cta-description">
            Your support provides clean, nutritious, and balanced meals to children, helping them stay in school and secure a healthy future.
          </p>
          <a href="#/donate" class="btn btn-primary btn-lg">Donate Meals Now</a>
        </div>
      </section>

    </div>
    `;
  },

  /** Called after the HTML has been inserted into the DOM. */
  mount() {
    let mealsCount = 280000000; // 28 Cr start
    const counterEl = document.getElementById('live-meal-counter');

    // Micro-interaction: simulate real-time incrementing meal counter
    counterInterval = setInterval(() => {
      mealsCount += Math.floor(Math.random() * 3) + 1;
      if (counterEl) counterEl.textContent = formatMeals(mealsCount);
    }, 3000);
  },

  /** Called right before the page is torn down / navigated away from. */
  unmount() {
    if (counterInterval) {
      clearInterval(counterInterval);
      counterInterval = null;
    }
  },
};
