import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';


const Home = () => {
  return (
    <main>
      <article>

        {/* HERO SECTION */}
        <section className="hero" id="home" aria-label="home">
          <div className="container">

            <div className="hero-content">

              <p className="hero-subtitle">Hello Everyone!</p>

              <h1 className="headline headline-1 section-title">
                I’m <span className="span">Rose Kididi</span>
              </h1>

              <p className="hero-text">
                I use animation as a third dimension by which to simplify experiences and guiding through each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.
              </p>

              <div className="input-wrapper">

                <input type="email" name="email_address" placeholder="Type your email address" required className="input-field" autoComplete="off" />

                <button className="btn btn-primary">
                  <span className="span">Subscribe</span>

                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </button>

              </div>

            </div>

            <div className="hero-banner">

              <img src="./src/assets/images/hero-banner.png" width="327" height="490" alt="Wren Clark" className="w-100" />

              <img src="./src/assets/images/pattern-2.svg" width="27" height="26" alt="shape" className="shape shape-1" />

              <img src="./src/assets/images/pattern-3.svg" width="27" height="26" alt="shape" className="shape shape-2" />

            </div>

            <img src="./src/assets/images/shadow-1.svg" width="500" height="800" alt="" className="hero-bg hero-bg-1" />

            <img src="./src/assets/images/shadow-2.svg" width="500" height="500" alt="" className="hero-bg hero-bg-2" />

          </div>
          </section>
          {/* Topics Section */}
        <section className="topics" id="topics" aria-labelledby="topic-label">
      <div className="container">

        <div className="card topic-card">

          <div className="card-content">

            <h2 className="headline headline-2 section-title card-title" id="topic-label">
              Hot topics
            </h2>

            <p className="card-text">
              Don't miss out on the latest news about Travel tips, Hotels review, Food guide...
            </p>

            <div className="btn-group">
            <button className="btn-icon" aria-label="previous" data-slider-prev>
            <IoArrowBack />
            </button>

            <button className="btn-icon" aria-label="next" data-slider-next>
             <IoArrowForward />
            </button>
            </div>


          </div>

          <div className="slider" data-slider>
            <ul className="slider-list" data-slider-container>

              <li className="slider-item">
                <a href="#" className="slider-card">

                  <figure className="slider-banner img-holder" style={{ '--width': 507, '--height': 618 }}>
                    <img src="./src/assets/images/topic-1.png" width="507" height="618" loading="lazy" alt="Sport" className="img-cover" />
                  </figure>

                  <div className="slider-content">
                    <span className="slider-title">Sport</span>

                    <p className="slider-subtitle">38 Articles</p>
                  </div>

                </a>
              </li>
              <li className="slider-item">
                <a href="#" className="slider-card">

                  <figure className="slider-banner img-holder" style={{ '--width': 507, '--height': 618 }}>
                    <img src="./src/assets/images/topic-2.png" width="507" height="618" loading="lazy" alt="Sport" className="img-cover" />
                  </figure>

                  <div className="slider-content">
                    <span className="slider-title">Sport</span>

                    <p className="slider-subtitle">38 Articles</p>
                  </div>

                </a>
              </li>
              <li className="slider-item">
                <a href="#" className="slider-card">

                  <figure className="slider-banner img-holder" style={{ '--width': 507, '--height': 618 }}>
                    <img src="./src/assets/images/topic-3.png" width="507" height="618" loading="lazy" alt="Sport" className="img-cover" />
                  </figure>

                  <div className="slider-content">
                    <span className="slider-title">Sport</span>

                    <p className="slider-subtitle">38 Articles</p>
                  </div>

                </a>
              </li>

              {/* Add more slider items here as needed */}

            </ul>
          </div>

        </div>

      </div>
      </section>

      { /* Featured Posts */ }
      <section className="section feature" aria-label="feature" id="featured">
      <div className="container">
        <h2 className="headline headline-2 section-title">
          <span className="span">Editor's picked</span>
        </h2>

        <p className="section-text">Featured and highly rated articles</p>

        <ul className="feature-list">
          {/* Featured Post 1 */}
          <li>
            <div className="card feature-card">
              <figure className="card-banner img-holder" style={{ '--width': 1602, '--height': 903 }}>
                <img
                  src="./src/assets/images/featured-1.png"
                  width="1602"
                  height="903"
                  loading="lazy"
                  alt="Self-observation is the first step of inner unfolding"
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <div className="card-wrapper">
                  <div className="card-tag">
                    <a href="#" className="span hover-2">#Travel</a>
                    <a href="#" className="span hover-2">#Lifestyle</a>
                  </div>
                  <div className="wrapper">
                    <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                    <span className="span">3 mins read</span>
                  </div>
                </div>
                <h3 className="headline headline-3">
                  <a href="#" className="card-title hover-2">
                    Self-observation is the first step of inner unfolding
                  </a>
                </h3>
                <div className="card-wrapper">
                  <div className="profile-card">
                    <img src="./src/assets/images/author-2.png" width="48" height="48" loading="lazy" alt="Joseph" className="profile-banner" />
                    <div>
                      <p className="card-title">Joseph</p>
                      <p className="card-subtitle">25 Nov 2022</p>
                    </div>
                  </div>
                  <a href="#" className="card-btn">Read more</a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="card feature-card">
              <figure className="card-banner img-holder" style={{ '--width': 1602, '--height': 903 }}>
                <img
                  src="./src/assets/images/featured-2.png"
                  width="1602"
                  height="903"
                  loading="lazy"
                  alt="Self-observation is the first step of inner unfolding"
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <div className="card-wrapper">
                  <div className="card-tag">
                    <a href="#" className="span hover-2">#Travel</a>
                    <a href="#" className="span hover-2">#Lifestyle</a>
                  </div>
                  <div className="wrapper">
                    <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                    <span className="span">3 mins read</span>
                  </div>
                </div>
                <h3 className="headline headline-3">
                  <a href="#" className="card-title hover-2">
                    Self-observation is the first step of inner unfolding
                  </a>
                </h3>
                <div className="card-wrapper">
                  <div className="profile-card">
                    <img src="./src/assets/images/author-2.png" width="48" height="48" loading="lazy" alt="Joseph" className="profile-banner" />
                    <div>
                      <p className="card-title">Joseph</p>
                      <p className="card-subtitle">25 Nov 2022</p>
                    </div>
                  </div>
                  <a href="#" className="card-btn">Read more</a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="card feature-card">
              <figure className="card-banner img-holder" style={{ '--width': 1602, '--height': 903 }}>
                <img
                  src="./src/assets/images/featured-1.png"
                  width="1602"
                  height="903"
                  loading="lazy"
                  alt="Self-observation is the first step of inner unfolding"
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <div className="card-wrapper">
                  <div className="card-tag">
                    <a href="#" className="span hover-2">#Travel</a>
                    <a href="#" className="span hover-2">#Lifestyle</a>
                  </div>
                  <div className="wrapper">
                    <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                    <span className="span">3 mins read</span>
                  </div>
                </div>
                <h3 className="headline headline-3">
                  <a href="#" className="card-title hover-2">
                    Self-observation is the first step of inner unfolding
                  </a>
                </h3>
                <div className="card-wrapper">
                  <div className="profile-card">
                    <img src="./src/assets/images/author-1.png" width="48" height="48" loading="lazy" alt="Joseph" className="profile-banner" />
                    <div>
                      <p className="card-title">Joseph</p>
                      <p className="card-subtitle">25 Nov 2022</p>
                    </div>
                  </div>
                  <a href="#" className="card-btn">Read more</a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="card feature-card">
              <figure className="card-banner img-holder" style={{ '--width': 1602, '--height': 903 }}>
                <img
                  src="./src/assets/images/featured-1.png"
                  width="1602"
                  height="903"
                  loading="lazy"
                  alt="Self-observation is the first step of inner unfolding"
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <div className="card-wrapper">
                  <div className="card-tag">
                    <a href="#" className="span hover-2">#Travel</a>
                    <a href="#" className="span hover-2">#Lifestyle</a>
                  </div>
                  <div className="wrapper">
                    <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                    <span className="span">3 mins read</span>
                  </div>
                </div>
                <h3 className="headline headline-3">
                  <a href="#" className="card-title hover-2">
                    Self-observation is the first step of inner unfolding
                  </a>
                </h3>
                <div className="card-wrapper">
                  <div className="profile-card">
                    <img src="./src/assets/images/author-3.png" width="48" height="48" loading="lazy" alt="Joseph" className="profile-banner" />
                    <div>
                      <p className="card-title">Joseph</p>
                      <p className="card-subtitle">25 Nov 2022</p>
                    </div>
                  </div>
                  <a href="#" className="card-btn">Read more</a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="card feature-card">
              <figure className="card-banner img-holder" style={{ '--width': 1602, '--height': 903 }}>
                <img
                  src="./src/assets/images/featured-3.png"
                  width="1602"
                  height="903"
                  loading="lazy"
                  alt="Self-observation is the first step of inner unfolding"
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <div className="card-wrapper">
                  <div className="card-tag">
                    <a href="#" className="span hover-2">#Travel</a>
                    <a href="#" className="span hover-2">#Lifestyle</a>
                  </div>
                  <div className="wrapper">
                    <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                    <span className="span">3 mins read</span>
                  </div>
                </div>
                <h3 className="headline headline-3">
                  <a href="#" className="card-title hover-2">
                    Self-observation is the first step of inner unfolding
                  </a>
                </h3>
                <div className="card-wrapper">
                  <div className="profile-card">
                    <img src="./src/assets/images/author-3.png" width="48" height="48" loading="lazy" alt="Joseph" className="profile-banner" />
                    <div>
                      <p className="card-title">Joseph</p>
                      <p className="card-subtitle">25 Nov 2022</p>
                    </div>
                  </div>
                  <a href="#" className="card-btn">Read more</a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="card feature-card">
              <figure className="card-banner img-holder" style={{ '--width': 1602, '--height': 903 }}>
                <img
                  src="./src/assets/images/featured-4.png"
                  width="1602"
                  height="903"
                  loading="lazy"
                  alt="Self-observation is the first step of inner unfolding"
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <div className="card-wrapper">
                  <div className="card-tag">
                    <a href="#" className="span hover-2">#Travel</a>
                    <a href="#" className="span hover-2">#Lifestyle</a>
                  </div>
                  <div className="wrapper">
                    <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                    <span className="span">3 mins read</span>
                  </div>
                </div>
                <h3 className="headline headline-3">
                  <a href="#" className="card-title hover-2">
                    Self-observation is the first step of inner unfolding
                  </a>
                </h3>
                <div className="card-wrapper">
                  <div className="profile-card">
                    <img src="./src/assets/images/author-3.png" width="48" height="48" loading="lazy" alt="Joseph" className="profile-banner" />
                    <div>
                      <p className="card-title">Joseph</p>
                      <p className="card-subtitle">25 Nov 2022</p>
                    </div>
                  </div>
                  <a href="#" className="card-btn">Read more</a>
                </div>
              </div>
            </div>
          </li>

          {/* Add similar JSX code for the remaining featured posts */}
          
        </ul>

        <a href="#" className="btn btn-secondary">
          <span className="span">Show More Posts</span>
          <button className="btn-icon" aria-label="next" data-slider-next>
        <IoArrowForward />
          </button>

        </a>
      </div>

      <img src="./src/assets/images/shadow-3.svg" width="500" height="1500" loading="lazy" alt="" className="feature-bg" />
    </section>

    {/*Popular Tags*/}
    <section className="tags" aria-labelledby="tag-label">
      <div className="container">
        {/* Section title */}
        <h2 className="headline headline-2 section-title" id="tag-label">
          {/* Span for emphasis */}
          <span className="span">Popular Tags</span>
        </h2>

        {/* Section description */}
        <p className="section-text">Most searched keywords</p>

        {/* List to display tags */}
        <ul className="grid-list">
          {/* Individual tag */}
          <li>
            {/* Button with tag image and text */}
            <button className="card tag-btn">
              {/* Image for the tag */}
              <img src="./src/assets/images/tag1.png" width="32" height="32" loading="lazy" alt="Travel" />
              {/* Text label for the tag */}
              <p className="btn-text">Travel</p>
            </button>
          </li>

          {/* Repeat the structure for additional tags */}
          <li>
            <button className="card tag-btn">
              <img src="./src/assets/images/tag2.png" width="32" height="32" loading="lazy" alt="Culture" />
              <p className="btn-text">Culture</p>
            </button>
          </li>
          <li>
            <button className="card tag-btn">
              <img src="./src/assets/images/tag3.png" width="32" height="32" loading="lazy" alt="Culture" />
              <p className="btn-text">Lifestyle</p>
            </button>
          </li>
          <li>
            <button className="card tag-btn">
              <img src="./src/assets/images/tag4.png" width="32" height="32" loading="lazy" alt="Culture" />
              <p className="btn-text">Fashion</p>
            </button>
          </li>
          <li>
            <button className="card tag-btn">
              <img src="./src/assets/images/tag5.png" width="32" height="32" loading="lazy" alt="Culture" />
              <p className="btn-text">Food</p>
            </button>
          </li>
          <li>
            <button className="card tag-btn">
              <img src="./src/assets/images/tag6.png" width="32" height="32" loading="lazy" alt="Culture" />
              <p className="btn-text">Space</p>
            </button>
          </li>
          <li>
            <button className="card tag-btn">
              <img src="./src/assets/images/tag7.png" width="32" height="32" loading="lazy" alt="Culture" />
              <p className="btn-text">Animal</p>
            </button>
          </li>
          <li>
            <button className="card tag-btn">
              <img src="./src/assets/images/tag8.png" width="32" height="32" loading="lazy" alt="Culture" />
              <p className="btn-text">Minimal</p>
            </button>
          </li>
          <li>
            <button className="card tag-btn">
              <img src="./src/assets/images/tag9.png" width="32" height="32" loading="lazy" alt="Culture" />
              <p className="btn-text">Interior</p>
            </button>
          </li>
          <li>
            <button className="card tag-btn">
              <img src="./src/assets/images/tag10.png" width="32" height="32" loading="lazy" alt="Culture" />
              <p className="btn-text">Plant</p>
            </button>
          </li>
          <li>
            <button className="card tag-btn">
              <img src="./src/assets/images/tag11.png" width="32" height="32" loading="lazy" alt="Culture" />
              <p className="btn-text">Nature</p>
            </button>
          </li>
          <li>
            <button className="card tag-btn">
              <img src="./src/assets/images/tag12.png" width="32" height="32" loading="lazy" alt="Culture" />
              <p className="btn-text">Business</p>
            </button>
          </li>
        </ul>
      </div>
    </section>
      
      </article>
    </main>
  );
}

export default Home;
