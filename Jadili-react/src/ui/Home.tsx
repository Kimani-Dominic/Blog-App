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
                I’m <span className="span">Kimani Muiruri!</span>
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
      </article>
    </main>
  );
}

export default Home;
