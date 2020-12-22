import React from "react";
import Root from "../components/common/Root";
import Footer from "../components/common/Footer";

const About = () => (
  <Root>
    <div className="about-container">
      {/* Row */}
      <div className="row mt-5 pt-5 about-hero">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
            <h2 className="font-size-header mb-4">Philosophy</h2>
            <h4 className="font-size-subheader mb-4">
              As far back as I can remember I wanted to be a fashion designer and creating beautiful
              garments was my childhood dream. In 2005, I first started learning about global
              warming and have since been more aware of the issue that we face globally. So, when I
              became more serious about starting my own brand, I knew it had to be both sustainable
              and ethical. Our aesthetic ranges from casual chic to business casual with neutrals
              and some bold colours. We use organic and recycled linen, tencel, cotton, and wool to
              create looks that are effortless, yet fashionable! Natural fibres feel great to the
              touch and are better for the environment and they can be used without damaging the
              environment.
            </h4>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="about-image">
            <img src="/images/about/about-2.jpg" alt="Commerce.js illustration" />
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-image">
            <img src="/images/about/about-1.jpg" alt="Commerce.js illustration" />
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">How do we achieve this?</h3>
            <h4 className="font-size-subheader mb-4">
              - Timeless designs and durable fabrics for longevity is key element of our design
            </h4>
            <h4 className="font-size-subheader mb-4">
              - Neutral colour palette and high quality fabrics We source the most sustainable,
            </h4>
            <h4 className="font-size-subheader mb-4">
              - renewable, biodegradable that are available No mass production, minimal inventory
            </h4>
            <h4 className="font-size-subheader mb-4">
              - Made-to-order to reduce waste low fashion Packaging is biodegradable and recyclable
            </h4>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </Root>
);

export default About;
