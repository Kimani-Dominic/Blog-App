import React from "react";


const Tags = () => {
    return(
        <main>
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
            
        </main>

    );
}

export default Tags;